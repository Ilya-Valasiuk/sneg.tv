import React from 'react';
import { Link } from './../shared/link/link'

export function NewsFeedItem({ date, text, link }) {
  return (
    <div className="news-feed-item mb-3">
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
