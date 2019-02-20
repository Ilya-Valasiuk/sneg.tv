import React, { Component, Fragment } from 'react';
import { HeaderNewsSingle } from '../header-news/header-news-single';
import { withLoadingHeader } from '../header-news/header-loading-hoc';
import { Inner } from './inner';
import { InnerMobile } from './inner-mobile';
import { STUB_DATA, PARTNER_DATA } from './stub-data';

class InnerWrapperUI extends Component {
  render() {
    const { progress, headerTitle, isMobile, isTabletSm, onToggleCommentsPopup } = this.props;
    const InnerComponent = isMobile ? InnerMobile : Inner;
    return (
      <Fragment>
        {!isMobile && <HeaderNewsSingle title={headerTitle} progress={progress} />}
        <InnerComponent isTabletSm={isTabletSm} data={STUB_DATA[0]} partnerData={PARTNER_DATA} onToggleCommentsPopup={onToggleCommentsPopup} showIframe />
        <hr />
        <InnerComponent isTabletSm={isTabletSm} data={STUB_DATA[1]} partnerData={PARTNER_DATA} onToggleCommentsPopup={onToggleCommentsPopup} isCollapsed emptyComments />
        <hr />
        <InnerComponent isTabletSm={isTabletSm} data={STUB_DATA[2]} partnerData={PARTNER_DATA} onToggleCommentsPopup={onToggleCommentsPopup} isCollapsed />
        <hr />
        <InnerComponent isTabletSm={isTabletSm} data={STUB_DATA[3]} partnerData={PARTNER_DATA} onToggleCommentsPopup={onToggleCommentsPopup} isCollapsed />
      </Fragment>
    );
  }
}

export const InnerWrapper = withLoadingHeader(InnerWrapperUI);
