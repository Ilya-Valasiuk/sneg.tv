import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleBadge } from 'components/article-badge/article-badge';

import './author-cologne.scss';

export function AuthorCologne(props) {
  const { imgSrc, type, date, author, authorTitle, title } = props;

  return (
    <Link to="/inner" className="author-cologne">
      <div className="author-cologne-img-wrapper">
        <img src={imgSrc} alt="author" className="author-cologne-img img-fluid" />
      </div>
      <div className="author-cologne-badge">
        <ArticleBadge title={type} />
      </div>

      <div className="author-cologne-data">
        <div className="author-cologne-name">
          <div className="author-cologne-author">{author}</div>
          <div className="author-cologne-author-title">{authorTitle}</div>
        </div>
        <div className="author-cologne-bg">
          <div className="author-cologne-date mb-1">{date}</div>
          <div className="author-cologne-title">{title}</div>
        </div>
      </div>
      <div className="author-cologne-container"></div>
    </Link>
  );
}