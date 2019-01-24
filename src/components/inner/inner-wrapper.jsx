import React, { Component, Fragment } from 'react';
import { HeaderNewsSingle } from '../header-news/header-news-single';
import { withLoadingHeader } from '../header-news/header-loading-hoc';
import { Inner } from './inner';

const STUB_HEADER_TITLE = '«Зенит» попросил суд отпустить Кокорина из-под стражи';
const STUB_HEADER_TITLE1 = 'У арестованных в Чехии россиян и вьетнамцев изъяли почти 8 млн';
const STUB_HEADER_TITLE2 = 'Тестовый заголовок 2';
const STUB_HEADER_TITLE3 = 'Ещё один тестовый заголовок';

class InnerWrapperUI extends Component {
  render() {
    const { progress, headerTitle } = this.props;
    return (
      <Fragment>
        <HeaderNewsSingle title={headerTitle} progress={progress} />
        <Inner title={STUB_HEADER_TITLE} showIframe />
        <hr />
        <Inner title={STUB_HEADER_TITLE1} isCollapsed />
        <hr />
        <Inner title={STUB_HEADER_TITLE2} isCollapsed />
        <hr />
        <Inner title={STUB_HEADER_TITLE3} isCollapsed />
      </Fragment>
    );
  }
}

export const InnerWrapper = withLoadingHeader(InnerWrapperUI);
