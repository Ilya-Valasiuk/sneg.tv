import React from 'react';
import { Link } from './../shared/link/link'

export function NewsFeedItem({ date, text, link }) {
  return (
    <div className="news-feed-item">
      <Link to={link}>
        <p className="mb-2 title">
          {text}
        </p>
        <p className="date">{date}</p>
      </Link>
    </div>
  );
}

NewsFeedItem.defaultProps = {
  link: '#',
};
