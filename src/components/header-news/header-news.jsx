import React, { Component, Fragment } from 'react';
import { HeaderNewsSingle } from './header-news-single';
import { HeaderNewsGenerall } from './header-news-generall';

export class HeaderNews extends Component {
  state = {
    isSingleHeaderNews: false,
  }

  onHeaderToggleHandler = e => {
    this.setState({ isSingleHeaderNews: e.detail.isInit });
  }

  componentDidMount() {
    document.addEventListener('header-news-toggle', this.onHeaderToggleHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('header-news-toggle', this.onHeaderToggleHandler);
  }

  render() {
    const { headerTitle, progress } = this.props;

    return (
      <Fragment>
        {
          this.state.isSingleHeaderNews ?
            <HeaderNewsSingle title={headerTitle} progress={progress} hideCloseIcon /> : <HeaderNewsGenerall onThemeChange={this.props.onThemeChange} />
        }
      </Fragment>
    )
  }
}