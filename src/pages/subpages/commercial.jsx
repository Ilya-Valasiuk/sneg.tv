import React, { Fragment } from 'react';
import { HeaderNews } from 'components/header-news/header-news';
import { Commercial as CommercialComponent } from 'components/commercial/commercial';

export function Commercial({ isMobile }) {
  return (
    <Fragment>
      {!isMobile && <HeaderNews />}
      <CommercialComponent />
    </Fragment>
  );
}