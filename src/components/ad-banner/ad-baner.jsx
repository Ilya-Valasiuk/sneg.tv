import React from 'react';
import { banner1, fordBanner, barsRestaurant, primeVideo } from '../../img/banners';

const bannerMap = {
  banner1,
  fordBanner,
  barsRestaurant,
  primeVideo,
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
