import React from 'react';
import classnames from 'classnames';

import './snow-logo.scss';

export function SnowLogo({ isShort }) {
  return (
    <div className={classnames('snow-logo d-flex align-items-center text-center', { 'snow-logo-short': isShort })}>
      {isShort ?
        <div className="w-100 font-weight-bold">с</div> :
        <div className="w-100 font-weight-bold">снег.tv</div>
      }
    </div>
  );
}

SnowLogo.defaultProps = {
  isShort: false,
};
