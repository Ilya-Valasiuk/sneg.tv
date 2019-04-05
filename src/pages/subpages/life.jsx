import React from 'react';
import { Themes } from 'components/shared/themes/themes';
import { Unit } from 'components/unit/unit';

import { STUB_UNIT_DATA } from './stub-data';

export function Life({ isMobile, isTabletSm }) {
  return (
    <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
      <Unit {...STUB_UNIT_DATA.life} />
    </Themes>
  );
}