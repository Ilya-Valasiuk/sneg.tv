import React from 'react';
import { Button } from 'reactstrap';

export function More({ title, link }) {
  return (
    <div className="news-more text-center border rounded">
      <Button
        tag="a"
        href={link}
        color="link"
      >
        {title}
      </Button>
    </div>
  );
}

More.defaultProps = {
  link: '#',
}