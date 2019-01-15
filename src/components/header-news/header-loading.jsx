import React from 'react';

import './header-news.scss';

export function HeaderLoading({ progress }) {
  return (
    <div className="header-loading-wrapper">
      <div className="header-loading" style={{ transform: `translate(-${progress}%)` }}>
        <div className="header-progress"></div>
      </div>
    </div >
  );
}