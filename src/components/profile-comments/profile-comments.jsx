import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import { NewsComment } from 'components/news-block/news-comments/news-comment';

import './profile-comments.scss';

export function ProfileComments({ data }) {

  return (
    <div className="profile-comments">
      <h4 className="profile-comments-header mb-4">Комментарии</h4>
      {data.map(({ title, comments }) =>
        <Fragment key={title}>
          <div className="profile-comments-title mb-3">{title}</div>
          {comments.map((comment, index) =>
            <div className="mb-3" key={index}>
              <NewsComment className="mb-2" {...comment} />
              <div>
                <Button className="px-0 profile-comments-btn mr-5" color="link">Редактировать</Button>
                <Button className="px-0 profile-comments-btn" color="link">Удалить</Button>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}