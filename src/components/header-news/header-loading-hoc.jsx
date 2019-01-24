import React, { Component } from 'react';
import { throttle } from 'lodash';

const HEADER_HEIGHT = 102;

// LEGACY CODE
// TODO - improve 
function getCurrentVisibleEl(articles) {
	var result;
	for (var i = 0; i < articles.length; i++) {
		if (isElementVisible(articles[i])) {
			result = articles[i];

			break;
		}
	}

	return result;
}

// LEGACY CODE
// TODO - improve 
function isElementVisible(el) {
	var r, html;
	if (!el || 1 !== el.nodeType) { return false; }
	html = document.documentElement;
	r = el.getBoundingClientRect();

	return (!!r
		&& r.bottom >= 0
		&& r.right >= 0
		&& r.top <= html.clientHeight
		&& r.left <= html.clientWidth
	);
}

const getScrolledPosition = el => {
	if (el) {
		const rect = el.getBoundingClientRect();
		const translatePercent = Math.round((rect.bottom - HEADER_HEIGHT) * 100 / rect.height);

		return !(translatePercent > 0) ? 100 : translatePercent;
	}

	return 100;
};

const getCurrentTitle = el => {
	if (el) {
		const titleEl = el.querySelector('.news-inner-title');
		return titleEl ? titleEl.innerText : '';
	}

	return '';
}

const getHeaderData = articles => {
	const currentVisibleEl = getCurrentVisibleEl(articles);
	const currentTitle = getCurrentTitle(currentVisibleEl);
	const scrolledPosition = currentVisibleEl && getScrolledPosition(currentVisibleEl.querySelector('.news-inner'));

	return {
		title: currentTitle,
		progress: scrolledPosition >= 0 && scrolledPosition <= 100 ? scrolledPosition : 101, // 101 just to check that it's not in main view
	};
}

function fire(progress, title) {
	const evt = new CustomEvent('header-change', { detail: { progress, title } });
	document.dispatchEvent(evt);
}

function fireToggle(isInit) {
	const evt = new CustomEvent('header-news-toggle', { detail: { isInit } });
	document.dispatchEvent(evt);
}

const getInitValue = (progress, title) => {
	return Boolean(progress >= 0 && progress <= 100 && title);
}

export const withLoadingHeader = (WrappedComponent, shouldCheckProgress = true) => {
	return class HeaderLoadingHOC extends Component {

		constructor(props) {
			super(props);

			this.state = {
				title: '',
				progress: 0,
			};

			this.element = React.createRef();
			// TODO: do it more elegant way
			this.mainCol = null;

			this.scrollHandlerThrottle = throttle(this.scrollHandler, 80);
		}

		scrollHandler = () => {
			const { title, progress } = getHeaderData(this.articles);

			const newInitValue = getInitValue(progress, title);
			if (this.prevInitValue !== newInitValue) {
				fireToggle(newInitValue)
				this.prevInitValue = newInitValue;
			}

			fire(progress, title);
		}

		componentDidMount() {
			if (this.element.current) {
				this.articles = this.element.current.querySelectorAll('.scroll-element');

				this.scrollHandler();

				if (!this.mainCol) {
					this.mainCol = document.body.querySelector('.snow-col-main');
				}
				this.mainCol.addEventListener('scroll', this.scrollHandlerThrottle);
			}
		}

		componentWillUnmount() {
			if (this.mainCol) {
				this.mainCol.removeEventListener('scroll', this.scrollHandlerThrottle);
			}
		}

		render() {
			return (
				<div ref={this.element}>
					<WrappedComponent {...this.props} />
				</div>
			);
		}
	}
}