import React from 'react';
import { VerticalCarousel } from 'components/shared/vertical-carousel/vertical-carousel';

// STUB DATA
import { HEADER_NEWS_DATA } from './header-news-data';

export function HeaderNewsGenerall(props) {
  return (
    <VerticalCarousel data={HEADER_NEWS_DATA} onTabChange={props.onThemeChange} />
  );
}
