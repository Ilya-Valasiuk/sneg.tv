import React from 'react';

import './link.scss';

export function Link({ children, className, ...props }) {
  return (
    <a className={`link ${className}`} {...props}>{children}</a>
  )
}

Link.defaultProps = {
  className: '',
}