import React, { Fragment } from 'react';
import { HeaderNews } from 'components/header-news/header-news';
import { AuthorArticles as AuthorArticlesComponent } from 'components/author-articles/author-articles';
import { AUTHOR_ARTICLES_DATA } from './stub-data';

export function AuthorArticles(props) {
  const { isMobile } = props;

  return (
    <Fragment>
      {!isMobile && <HeaderNews />}
      <AuthorArticlesComponent data={AUTHOR_ARTICLES_DATA} />
    </Fragment>
  );
}