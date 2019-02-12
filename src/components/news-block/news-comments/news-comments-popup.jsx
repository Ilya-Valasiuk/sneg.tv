import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { NewsComment } from './news-comment';
import { CloseIcon } from './../../icons/close';

import { STUB_COMMENTS } from './stub-data';

import './news-comments.scss';

export class NewsCommentsPopup extends Component {
  render() {
    const { onToggleCommentsPopup, onToggleCommentCreatorPopup } = this.props;
    return (
      <Container className="news-comments news-comments-popup p-0">
        <Row className="news-comments-popup-title size-14 text-uppercase mb-4 align-items-center" noGutters>
          <Col className="title">комментарии <span className="count">{STUB_COMMENTS.length}</span></Col>
          <Col xs="auto" className="close" onClick={onToggleCommentsPopup}>
            <CloseIcon />
          </Col>
        </Row>
        <Row className="news-comments-popup-scroller">
          {STUB_COMMENTS.map(comment => (
            <Col xs={12} className="mb-2">
              <NewsComment {...comment} />
              <div className="news-comments-buttons">
                <Button color="link" className="ml-md-2">Ответить</Button>
              </div>
            </Col>
          ))}
        </Row>
        <div className="news-comments-popup-button" onClick={onToggleCommentCreatorPopup}>
          <Button color="link">Комментировать</Button>
        </div>
      </Container>
    );
  }
}