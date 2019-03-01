import React from 'react';
import { Link } from 'react-router-dom';
import { NewsDateType } from 'components/news-block/news-date-type/news-date-type';

import './search-results.scss';

export function SearchResultsItem({ date, type, typeLink, resultHeader, resultText }) {
  return (
    <div className="search-results-item">
      <NewsDateType date={date} type={type} typeLink={typeLink} className="pl-0 align-items-center" />
      <Link to="/inner" className="search-results-item-link">
        <p className="search-results-item-header mb-0 mb-md-2" dangerouslySetInnerHTML={{ __html: resultHeader }} />
        <p className="search-results-item-text d-none d-md-block mb-0">{resultText}</p>
      </Link>
    </div>
  );
}