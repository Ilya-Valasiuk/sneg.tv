import React from 'react';

import './link.css';

export function Link({ children, className, ...props }) {
  return (
    <a className={`link ${className}`} {...props}>{children}</a>
  )
}