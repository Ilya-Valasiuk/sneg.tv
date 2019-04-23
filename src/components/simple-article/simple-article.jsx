import React from 'react';
import { NewsDateType } from 'components/news-block/news-date-type/news-date-type';
import { PinnedIcon } from 'components/icons/pinned';
import { Link } from 'components/shared/link/link';

import './simple-article.scss';

export function SimpleArticle({ title, type, date, typeLink, imgSrc, isPinned, hideDate, href }) {
  return (
    <div className="simple-article">
      <Link href={href}>
        <img className="simple-article-img img-fluid mb-2" src={imgSrc} alt={title} />
      </Link>
      <div className="d-flex align-items-center">
        {!hideDate && <NewsDateType date={date} type={type} typeLink={typeLink} className="px-0" />}
        {isPinned && <PinnedIcon />}
      </div>
      <Link href={href}>
        <h4 className="simple-article-title">{title}</h4>
      </Link>
    </div>
  );
}

SimpleArticle.defaultProps = {
  hideDate: false,
};