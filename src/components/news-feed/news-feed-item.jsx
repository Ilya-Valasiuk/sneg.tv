import React from 'react';

export function NewsFeedItem({ date, text }) {
  return (
    <div className="news-feed-item my-3">
      <p className="mb-2 title">
        {text}
      </p>
      <p className="date">{date}</p>
    </div>
  );
}