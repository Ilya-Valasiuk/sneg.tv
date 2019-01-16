import React, { Component } from 'react';
import { throttle } from 'lodash';

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
		const translatePercent = Math.round(rect.bottom * 100 / rect.height);

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
		progress: scrolledPosition,
	};
}

export const withLoadingHeader = WrappedComponent => {
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
			console.log('here');
		}

		scrollHandler = () => {
			this.setState(getHeaderData(this.articles));
		}

		componentDidMount() {
			if (this.element.current) {
				this.articles = this.element.current.querySelectorAll('.news-block');

				this.setState(getHeaderData(this.articles));

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
			const { title, progress } = this.state;

			return (
				<div ref={this.element}>
					<WrappedComponent {...this.props} title={title} progress={progress} />
				</div>
			);
		}
	}
}