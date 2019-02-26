import React from 'react';
import { Button } from 'reactstrap';

import './more.scss';

export function More({ title, link, className }) {
  return (
    <div className="more text-center border rounded">
      <Button
        tag="a"
        href={link}
        color="link"
        className={className}
      >
        {title}
      </Button>
    </div>
  );
}

More.defaultProps = {
  link: '#',
  className: '',
}