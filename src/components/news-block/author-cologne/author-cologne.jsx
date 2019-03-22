import React from 'react';
import { Link } from 'react-router-dom';

import './author-cologne.scss';

export function AuthorCologne(props) {
  const { imgSrc, type, date, author, title } = props;

  return (
    <Link to="/inner" className="author-cologne">
      <img src={imgSrc} alt="author" className="author-cologne-img img-fluid" />
      <div className="author-cologne-data">
        <div className="author-cologne-date mb-1">{date}</div>
        <div className="author-cologne-type mb-3">{type}</div>
        <div className="author-cologne-author mb-3">{author}</div>
        <div className="author-cologne-title">{title}</div>
      </div>
    </Link>
  );
}