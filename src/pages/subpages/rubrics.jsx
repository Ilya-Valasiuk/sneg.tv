import React, { Fragment } from 'react';
import { HeaderNews } from 'components/header-news/header-news';
import { Rubrics as RubricsComponent } from 'components/rubrics/rubrics';

export function Rubrics({ isMobile }) {
  return (
    <Fragment>
      {!isMobile && <HeaderNews />}
      <RubricsComponent />
    </Fragment>
  );
}