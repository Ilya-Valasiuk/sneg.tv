import React from 'react';
import { Themes } from 'components/shared/themes/themes';
import { Editors as EditorsComponent } from 'components/editors/editors';

export function Editors({ isMobile, isTabletSm }) {
  return (
    <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
      <EditorsComponent />
    </Themes>
  );
}