import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';

import { NewsFeed } from './../components/news-feed/news-feed';
import { NewsFeedCollapsed } from './../components/news-feed/news-feed-collapsed';
import { Home } from './../components/home/home';

class MainPage extends Component {
  state = {
    isFeedOpened: false,
    isDesktop: true,
  }

  toggleFeedPanel = (isOpened) => {
    this.setState({ isFeedOpened: isOpened });
  }

  onKeyDownHandler = (event) => {
    if (!this.state.isDesktop && this.state.isFeedOpened && event.keyCode === 27) {
      this.toggleFeedPanel(false);
    }
  }

  onResize = (width) => {
    this.setState({
      isDesktop: width >= 1440,
    })
  }

  render() {
    const { isDesktop, isFeedOpened } = this.state;

    return (
      <Container className="snow p-0" fluid onKeyDown={this.onKeyDownHandler} tabIndex={0}>
        <Row className={classnames('snow-col', { 'feed-opened': isFeedOpened })} noGutters>
          <Col className="snow-col-feed" xs='auto'>
            <NewsFeed isFeedOpened={isDesktop || isFeedOpened} onFeedPanelOpen={this.toggleFeedPanel} />
          </Col>
          <Col className="snow-col-main" xs='auto'>
            <Home />
            <div className="blackout " />
          </Col>
        </Row>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
      </Container>
    );
  }
}

export default MainPage;
