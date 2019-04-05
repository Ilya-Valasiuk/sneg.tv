import React from 'react';
import { STUB_RESULT_DATA } from 'pages/subpages/stub-data';
import { Themes } from 'components/shared/themes/themes';
import { SearchResults as SearchresultsComponent } from 'components/search-results/search-results';

export function SearchResults({ onSearch, isMobile, isTabletSm }) {
  return (
    <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
      <SearchresultsComponent onSearch={onSearch} results={STUB_RESULT_DATA} isMobile={isMobile} />
    </Themes>
  );
}
