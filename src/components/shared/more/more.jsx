import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './more.scss';

export function More({ title, link, className, onClick }) {
  return (
    <div className="more text-center border rounded">
      <Button
        tag={onClick ? undefined : Link}
        to={link}
        color="link"
        className={className}
        onClick={onClick}
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