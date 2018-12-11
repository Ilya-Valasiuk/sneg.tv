import React from 'react';
import { Button } from 'reactstrap';

export function More({ title, link, className }) {
  return (
    <div className="news-more text-center border rounded">
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