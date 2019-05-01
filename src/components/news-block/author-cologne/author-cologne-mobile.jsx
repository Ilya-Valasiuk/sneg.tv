import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleBadge } from 'components/article-badge/article-badge';

import './author-cologne.scss';

export function AuthorCologneMobile(props) {
  const { imgSrc, type, date, author, title } = props;

  return (
    <Link className="author-cologne-mobile" to="/inner" style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="author-cologne-badge">
        <ArticleBadge title={type} />
      </div>
      <div className="author-cologne-mobile-data">
        <div className="author-cologne-mobile-date">{date}</div>
        <div className="author-cologne-mobile-author mb-3">{author}</div>
        <div className="author-cologne-mobile-title">{title}</div>
      </div>
    </Link >
  );
}