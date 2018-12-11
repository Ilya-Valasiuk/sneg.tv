import React from 'react';
import classnames from 'classnames';

import './snow-logo.scss';

export function SnowLogo({ isShort }) {
  return (
    <div className={classnames('snow-logo d-flex align-items-center text-center text-white font-weight-900', { 'snow-logo-short': isShort })}>
      {isShort ?
        <div className="w-100">с</div> :
        <div className="w-100">снег.tv</div>
      }
    </div>
  );
}

SnowLogo.defaultProps = {
  isShort: false,
};
