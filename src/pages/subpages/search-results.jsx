import React, { Fragment } from 'react';
import { STUB_RESULT_DATA } from 'pages/subpages/stub-data';
import { HeaderNews } from 'components/header-news/header-news';
import { SearchResults as SearchresultsComponent } from 'components/search-results/search-results';

export function SearchResults({ onSearch, isMobile }) {
  return (
    <Fragment>
      {!isMobile && <HeaderNews />}
      <SearchresultsComponent onSearch={onSearch} results={STUB_RESULT_DATA} />
    </Fragment>
  );
}
