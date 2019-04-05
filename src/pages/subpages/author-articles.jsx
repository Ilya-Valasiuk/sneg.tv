import React from 'react';
import { Themes } from 'components/shared/themes/themes';
import { AuthorArticles as AuthorArticlesComponent } from 'components/author-articles/author-articles';
import { AUTHOR_ARTICLES_DATA } from './stub-data';

export function AuthorArticles(props) {
  const { isMobile, isTabletSm } = props;

  return (
    <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
      <AuthorArticlesComponent data={AUTHOR_ARTICLES_DATA} />
    </Themes>
  );
}