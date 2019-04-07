import React, { Component } from 'react';
import classnames from 'classnames';
import { Container, Row, Col, Button } from 'reactstrap';
import { NewsComment } from './news-comment';
import { CloseIcon } from 'components/icons/close';

import { STUB_COMMENTS } from './stub-data';

import './news-comments.scss';

export class NewsCommentsPopup extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {
      isAdding: false,
    }
  }

  toggleAddingComment = () => {
    this.setState(prevState => ({ isAdding: !prevState.isAdding }), () => {
      if (this.state.isAdding && this.inputRef.current) {
        this.inputRef.current.focus();
      }
    });
  }

  render() {
    const { onToggleCommentsPopup, onToggleCommentCreatorPopup } = this.props;
    const { isAdding } = this.state;

    return (
      <Container className="news-comments news-comments-popup">
        <Row className="news-comments-popup-title mb-0 align-items-center align-items-md-end" noGutters>
          <Col xs={12} className="d-flex justify-content-between align-items-center">
            <span>комментарии <span className="count ml-md-2">{STUB_COMMENTS.length}</span></span>
            <span className="close" onClick={onToggleCommentsPopup}><CloseIcon /></span>
          </Col>
          <Col xs={12} className="d-none d-md-block news-comments-separator"><hr className="m-0" /></Col>
        </Row>
        <Row className="news-comments-popup-scroller pt-3" noGutters>
          {STUB_COMMENTS.map(({ isThread, ...comment }) => (
            <Col xs={12} className={classnames('pt-2', { 'news-comments-thread': isThread })}>
              <NewsComment {...{ ...comment, isThread }} />
              <div className="news-comments-buttons">
                <Button color="link" className="ml-md-2 px-0">Ответить</Button>
              </div>
              {isThread && <span className="news-comments-thread-line"></span>}
            </Col>
          ))}
        </Row>
        <div className="news-comments-popup-button d-md-none">
          <Button color="link" onClick={onToggleCommentCreatorPopup}>Комментировать</Button>
        </div>
        <div className="news-comments-popup-button d-none d-md-block text-left">
          {
            isAdding ?
              <Row className="align-items-baseline">
                <Col>
                  <input ref={this.inputRef} className="comment-input form-control" placeholder="Введите текс комментария" />
                </Col>
                <Col xs="auto">
                  <Button color="primary" onClick={onToggleCommentsPopup}>Ответить</Button>
                </Col>
                <Col xs="auto" className="close" onClick={this.toggleAddingComment}><CloseIcon /></Col>
              </Row> :
              <Button color="primary" onClick={this.toggleAddingComment}>Добавить комментарий</Button>
          }
        </div>
      </Container>
    );
  }
}