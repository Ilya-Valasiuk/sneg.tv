import React from 'react';
import { Themes } from 'components/shared/themes/themes';
import { Tags as TagsComponent } from 'components/tags/tags';

export function Tags({ isMobile, isTabletSm }) {
  return (
    <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
      <TagsComponent />
    </Themes>
  );
}