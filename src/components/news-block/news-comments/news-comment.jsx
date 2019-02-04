import React from 'react';
import { Row, Col } from 'reactstrap';

import './news-comments.scss';

export function NewsComment({ avatartImg, userName, time, text }) {
  return (
    <Row>
      <Col xs='auto' className="pr-2">
        <div className="news-comments-avatar-wrapper">
          {
            avatartImg ?
            <img src={avatartImg} className="news-comments-avatar rounded-circle" alt="avatar" />
            : <span className="news-comments-avatar-fallback rounded-circle"></span>
          }
        </div>
      </Col>
      <Col className="pl-1">
        <div className="mb-3 news-comments-author">
          {userName} <span className="time">{time}</span>
        </div>
        <p className="news-comments-text">{text}</p>
      </Col>
    </Row>
  );
}