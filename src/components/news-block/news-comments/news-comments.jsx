import React from 'react';
import { Button } from 'reactstrap';
import { NewsComment } from './news-comment';

import { STUB_COUNT, STUB_COMMENTS } from './stub-data';

import './news-comments.scss';

export function NewsComments({ }) {
  return (
    <div className="news-comments">
      <div className="news-comments-title size-14 text-uppercase mb-4">комментарии</div>
      {STUB_COMMENTS.map(comment => <NewsComment {...comment} />)}
      <div className="news-comments-buttons">
        <Button color="link">Читать все ({STUB_COUNT})</Button>
        <Button color="link" className="ml-2">Комментировать</Button>
      </div>
    </div>
  );
}
