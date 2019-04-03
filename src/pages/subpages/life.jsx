import React, { Fragment } from 'react';
import { HeaderNews } from 'components/header-news/header-news';
import { Unit } from 'components/unit/unit';

import { STUB_UNIT_DATA } from './stub-data';

export function Life({ isMobile }) {
  return (
    <Fragment>
      {!isMobile && <HeaderNews />}
      <Unit {...STUB_UNIT_DATA.life} />
    </Fragment>
  );
}