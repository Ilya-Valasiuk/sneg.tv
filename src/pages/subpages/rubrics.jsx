import React from 'react';
import { Themes } from 'components/shared/themes/themes';
import { Rubrics as RubricsComponent } from 'components/rubrics/rubrics';

export function Rubrics({ isMobile, isTabletSm }) {
  return (
    <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
      <RubricsComponent />
    </Themes>
  );
}