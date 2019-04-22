import React from 'react';
import { Link } from 'react-router-dom';
import { mobileCar } from '../../img/banners';

import './mobile-news.scss';

export function MobileNews(props) {
  const { imgSrc, imgPlaceholder, type, date, link = '/inner' } = props;

  return (
    <Link to={link} className="mobile-news w-100">
      <img src={imgSrc} className="w-100" />
      <div className="image-overlay"></div>
      <div className="placeholder-text">
        <p className="mb-1 text-uppercase"><span className="date">{date}</span> <span className="type">{type}</span></p>
        <p className="title-text font-weight-900 mb-0">{imgPlaceholder}</p>
      </div>
    </Link>
  );
}