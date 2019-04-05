import React from 'react';
import { Themes } from 'components/shared/themes/themes';
import { Commercial as CommercialComponent } from 'components/commercial/commercial';

export function Commercial({ isMobile, isTabletSm }) {
  return (
    <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
      <CommercialComponent />
    </Themes>
  );
}