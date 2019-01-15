import React, { Component, Fragment } from 'react';
import { HeaderNewsSingle } from '../header-news/header-news-single';
import { withLoadingHeader } from '../header-news/header-loading-hoc';
import { Inner } from './inner';

const STUB_HEADER_TITLE = '«Зенит» попросил суд отпустить Кокорина из-под стражи';
const STUB_HEADER_TITLE1 = 'У арестованных в Чехии россиян и вьетнамцев изъяли почти 8 млн';

class InnerWrapperUI extends Component {
  render() {
    const { progress, title } = this.props;
    return (
      <Fragment>
        <HeaderNewsSingle title={title} progress={progress} />
        <Inner title={STUB_HEADER_TITLE} />
        <hr />
        <Inner title={STUB_HEADER_TITLE1} />
      </Fragment>
    );
  }
}

export const InnerWrapper = withLoadingHeader(InnerWrapperUI);
