import React from 'react';
import classnames from 'classnames';

function PollResultItem({ title, count, percent }) {
  return (
    <div className="article-poll-results-item">
      <p className="mb-2">{title}</p>
      <div className="results d-flex align-items-baseline mb-3">
        <span className="results-bar mr-1" style={{ width: percent }}></span>
        <span className="results-text">{percent}% ({count})</span>
      </div>
    </div>
  );
}

export function ArticlePollResults({ data, className }) {
  const { title, count, results } = data;
  return (
    <div className={classnames('article-poll', className)}>
      <h4 className="article-poll-title mb-4">{title}</h4>

      <div className="mb-3">
        {results.map(item => <PollResultItem {...item} />)}
      </div>

      <p className="article-poll-voted mb-0">Проголосовало {count} человек</p>
    </div>
  )
}