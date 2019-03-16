import React from 'react';
import { NewsDateType } from 'components/news-block/news-date-type/news-date-type';
import { PinnedIcon } from 'components/icons/pinned';

import './favorite-article.scss';

export function FavoriteArticle({ title, type, date, typeLink, imgSrc }) {
  return (
    <div className="favorite-article">
      <img className="favorite-article-img img-fluid mb-2" src={imgSrc} alt={title} />
      <div className="d-flex align-items-center">
        <NewsDateType date={date} type={type} typeLink={typeLink} className="px-0" />
        <PinnedIcon />
      </div>
      <h4 className="favorite-article-title">{title}</h4>
    </div>
  );
}