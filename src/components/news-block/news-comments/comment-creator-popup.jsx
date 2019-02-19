import React, { Component } from 'react';
import { Container, Row, Col, Button, FormGroup, Input } from 'reactstrap';
import { CloseIcon } from './../../icons/close';

import './news-comments.scss';

export class CommentCreatorPopup extends Component {
  render() {
    const { onToggleCommentCreatorPopup } = this.props;
    return (
      <Container className="news-comments news-comments-popup">
        <Row className="news-comments-popup-title sticky size-14 text-uppercase align-items-center" noGutters>
          <Col className="d-flex align-items-center h-100 bg-white title">Ваш комментарий</Col>
          <Col xs="auto" className="close" onClick={onToggleCommentCreatorPopup}>
            <CloseIcon />
          </Col>
        </Row>
        <Row className="news-comments-popup-scroller px-0" noGutters>
          <FormGroup className="h-100 w-100 mb-0">
            <Input type="textarea" name="text" className="h-100" />
          </FormGroup>
        </Row>
        <div className="news-comments-popup-button" onClick={onToggleCommentCreatorPopup}>
          <Button color="link">Отправить</Button>
        </div>
      </Container>
    );
  }
}