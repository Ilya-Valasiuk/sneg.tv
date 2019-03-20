import React, { Fragment } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { NewsComment } from 'components/news-block/news-comments/news-comment';
import { Link } from 'components/shared/link/link';

import './profile-comments.scss';

export function ProfileComments({ data }) {

  return (
    <div className="profile-comments">
      <Row className="profile-comments-header mb-4 mb-md-3 align-items-center">
        <Col xs="12" md="auto">Комментарии</Col>
        <Col className="d-none d-md-block"><hr /></Col>
      </Row>
      {data.map(({ title, comments }) =>
        <Fragment key={title}>
          <Link href="#" className="profile-comments-title mb-3 d-block">{title}</Link>
          {comments.map((comment, index) =>
            <div className="mb-3" key={index}>
              <NewsComment className="mb-2" {...comment} />
              <div className="profile-comments-btn-wrapper">
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