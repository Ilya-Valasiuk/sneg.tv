import React, { Fragment } from 'react';
import { HeaderNews } from 'components/header-news/header-news';
import { Editors as EditorsComponent } from 'components/editors/editors';

export function Editors({ isMobile }) {
  return (
    <Fragment>
      {!isMobile && <HeaderNews />}
      <EditorsComponent />
    </Fragment>
  );
}