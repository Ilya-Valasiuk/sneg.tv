import React from 'react';
import classnames from 'classnames';
import { Button, Row, Col } from 'reactstrap';

import './profile-proposed-article.scss';

const getStatusText = status => {
  switch (status) {
    case 1:
      return 'Опубликовано';
    case 2:
      return 'На рассмотрении';
    default:
      return 'Отклонено';
  }
}


export function ProfileProposedArticle({ title, previewText, status }) {
  return (
    <Row className="profile-proposed-article">
      <Col>
        <h4 className="profile-proposed-article-title">{title}</h4>
        <p className="profile-proposed-article-text">{previewText}</p>
        <div className="mb-2">
          <Button className="px-0 profile-proposed-article-btn mr-5" color="link">Редактировать</Button>
          {status === 1 && <Button className="px-0 profile-proposed-article-btn mr-5" color="link">Читать на сайте</Button>}
          <Button className="px-0 profile-proposed-article-btn" outline color="danger">Удалить</Button>
        </div>
      </Col>
      <Col md="auto">
        <p className={classnames('profile-proposed-article-status mb-0', {
          'approved': status === 1,
          'rejected': status === 0,
        })}>
          {getStatusText(status)}
        </p>
      </Col>
    </Row>
  );
}