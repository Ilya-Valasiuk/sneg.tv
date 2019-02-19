import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Button, Col, Row } from 'reactstrap';
import { NewsComment } from './news-comment';

import './news-comments.scss';

export function NewsComments({ onToggleCommentsPopup, data }) {
  return (
    <div className="news-comments">
      <div className="news-comments-title size-14 text-uppercase mb-4">комментарии</div>
      <Row noGutters className="mb-2">
        <Col xs={12}>
          {data.length ? <NewsComment {...data[0]} /> : <div className="news-comments-empty-text">Будь первым, кто оставит комментарий к этой статье</div>}
        </Col>
      </Row>
      <div className={classnames('news-comments-buttons', { 'news-comments-buttons-empty': !data.length })}>
        <Button color="link" onClick={onToggleCommentsPopup}>
          {
            data.length ?
            <Fragment>Читать все ({data.length})</Fragment> :
            <Fragment>Комментировать</Fragment>
          }
        </Button>
      </div>
    </div>
  );
}
