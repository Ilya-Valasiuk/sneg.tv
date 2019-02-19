import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';

import './news-comments.scss';

export function NewsComment({ avatartImg, userName, userNameAnswer, time, text, isThread }) {
  const avatarEl = <Fragment>
    <div className="news-comments-avatar-wrapper">
      {
        avatartImg ?
          <img src={avatartImg} className="news-comments-avatar rounded-circle" alt="avatar" />
          : <span className="news-comments-avatar-fallback rounded-circle"></span>
      }
    </div>
  </Fragment>;
  return (
    <Row noGutters>
      <Col xs='auto' className={classnames('pr-2 d-none', { 'd-md-block': !isThread })}>
        {avatarEl}
      </Col>
      <Col className="pl-md-1">
        <div className="mb-2 mb-sm-0 d-flex align-items-center">
          <div className={classnames('d-md-none mr-3', { 'd-none': isThread })}>
            {avatarEl}
          </div>
          <div className="mb-md-3 news-comments-author">
            {userName} <span className="time">{time}</span>
          </div>
        </div>
        <p className="news-comments-text mb-0">{userNameAnswer ? <span className="font-weight-bold">{userNameAnswer}, </span> : null}{text}</p>
      </Col>
    </Row>
  );
}