import React, { Component, Fragment } from 'react';
import { HeaderNewsSingle } from '../header-news/header-news-single';
import { withLoadingHeader } from '../header-news/header-loading-hoc';
import { Inner } from './inner';
import { InnerMobile } from './inner-mobile';

const STUB_HEADER_TITLE = '«Зенит» попросил суд отпустить Кокорина из-под стражи';
const STUB_HEADER_TITLE1 = 'У арестованных в Чехии россиян и вьетнамцев изъяли почти 8 млн';
const STUB_HEADER_TITLE2 = 'Тестовый заголовок 2';
const STUB_HEADER_TITLE3 = 'Ещё один тестовый заголовок';

class InnerWrapperUI extends Component {
  render() {
    const { progress, headerTitle, isMobile, isTabletSm, onToggleCommentsPopup } = this.props;
    const InnerComponent = isMobile ? InnerMobile : Inner;
    return (
      <Fragment>
        {!isMobile && <HeaderNewsSingle title={headerTitle} progress={progress} />}
        <InnerComponent isTabletSm={isTabletSm} title={STUB_HEADER_TITLE} onToggleCommentsPopup={onToggleCommentsPopup} showIframe />
        <hr />
        <InnerComponent isTabletSm={isTabletSm} title={STUB_HEADER_TITLE1} onToggleCommentsPopup={onToggleCommentsPopup} isCollapsed emptyComments />
        <hr />
        <InnerComponent isTabletSm={isTabletSm} title={STUB_HEADER_TITLE2} onToggleCommentsPopup={onToggleCommentsPopup} isCollapsed />
        <hr />
        <InnerComponent isTabletSm={isTabletSm} title={STUB_HEADER_TITLE3} onToggleCommentsPopup={onToggleCommentsPopup} isCollapsed />
      </Fragment>
    );
  }
}

export const InnerWrapper = withLoadingHeader(InnerWrapperUI);
