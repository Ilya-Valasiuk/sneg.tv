import React from 'react';
import { NewsDateType } from 'components/news-block/news-date-type/news-date-type';
import { PinnedIcon } from 'components/icons/pinned';

import './simple-article.scss';

export function SimpleArticle({ title, type, date, typeLink, imgSrc, isPinned }) {
  return (
    <div className="simple-article">
      <img className="simple-article-img img-fluid mb-2" src={imgSrc} alt={title} />
      <div className="d-flex align-items-center">
        <NewsDateType date={date} type={type} typeLink={typeLink} className="px-0" />
        {isPinned && <PinnedIcon />}
      </div>
      <h4 className="simple-article-title">{title}</h4>
    </div>
  );
}