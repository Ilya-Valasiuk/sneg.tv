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
    isMenuOpened: false,
    isSearchOpened: false,
    isDesktop: true,
  }

  toggleMenu = () => {
    this.setState(({ isMenuOpened }) => ({ isMenuOpened: !isMenuOpened, isSearchOpened: false }));
  }

  toogleSearch = () => {
    this.setState(({ isSearchOpened }) => ({ isMenuOpened: false, isSearchOpened: !isSearchOpened }));
  }

  toggleFeedPanel = () => {
    this.setState(({ isFeedOpened }) => ({ isFeedOpened: !isFeedOpened }));
  }

  onKeyDownHandler = (event) => {
    if (event.keyCode === 27) {
      if (!this.state.isDesktop && this.state.isFeedOpened) {
        this.toggleFeedPanel();
        return;
      }

      if (this.state.isMenuOpened || this.state.isSearchOpened) {
        this.setState({
          isMenuOpened: false,
          isSearchOpened: false,
        });
        return;
      }
    }
  }

  onResize = (width) => {
    this.setState({
      isDesktop: width >= 1440,
    })
  }

  render() {
    const { isDesktop, isFeedOpened, isMenuOpened, isSearchOpened } = this.state;

    return (
      <Container className="snow p-0" fluid onKeyDown={this.onKeyDownHandler} tabIndex={0}>
        <Row className={classnames('snow-col', { 'feed-opened': isFeedOpened, 'menu-opened': isMenuOpened, 'search-opened': isSearchOpened })} noGutters>
          <Col className="snow-col-feed" xs='auto'>
            <NewsFeed isMenuOpened={isMenuOpened} isSearchOpened={isSearchOpened} isFeedOpened={isDesktop || isFeedOpened} onFeedPanelOpen={this.toggleFeedPanel} />
          </Col>
          <Col className="snow-col-main" xs='auto'>
            <Home isMenuOpened={isMenuOpened} isSearchOpened={isSearchOpened} onMenuToggle={this.toggleMenu} onSearchToggle={this.toogleSearch} />
            <div className="blackout " />
          </Col>
        </Row>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
      </Container>
    );
  }
}

export default MainPage;
