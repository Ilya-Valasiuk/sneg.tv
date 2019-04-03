import React from 'react';

import './article-badge.scss';

export function ArticleBadge({ title }) {
  return (
    <div className="article-badge">{title}</div>
  );
}