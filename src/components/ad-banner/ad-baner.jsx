import React from 'react';
import { banner1, fordBanner, barsRestaurant } from '../../img/banners';

const bannerMap = {
  banner1,
  fordBanner,
  barsRestaurant,
}

export function AdBanner({ bannerType }) {
  const banner = bannerMap[bannerType];

  return (
    <img src={banner} alt="banner" />
  );
}

AdBanner.defaultProps = {
  bannerType: 'banner1',
}
