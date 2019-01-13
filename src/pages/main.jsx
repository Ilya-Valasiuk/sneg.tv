import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { NewsFeed } from './../components/news-feed/news-feed';
import { NewsFeedCollapsed } from './../components/news-feed/news-feed-collapsed';
import { Header } from '../components/header/header';
import { Search } from './../components/search/search';
import { Home } from './../components/home/home';
import { InnerWrapper } from './../components/inner/inner-wrapper';
import { Menu } from './../components/menu/menu';
import { Footer } from './../components/footer/footer';

import './main.scss';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFeedOpened: false,
      isMenuOpened: false,
      isSearchOpened: false,
      isDesktop: true,
    };

    this.containerRef = React.createRef();
  }

  toggleMenu = () => {
    this.setState(({ isMenuOpened }) => ({ isMenuOpened: !isMenuOpened, isSearchOpened: false }));
  }

  toggleSearch = () => {
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

  onBodyClick = (event) => {
    if (this.state.isFeedOpened) {
      if (event.target.closest('.snow-col-main')) {
        this.toggleFeedPanel();
      }
    }
  };

  componentDidMount = () => {
    const containerEl = this.containerRef.current;

    if (containerEl) {
      containerEl.addEventListener('click', this.onBodyClick);
    }
  }

  componentWillUnmount = () => {
    const containerEl = this.containerRef.current;

    if (containerEl) {
      containerEl.removeEventListener('click', this.onBodyClick);
    }
  }

  render() {
    const { isDesktop, isFeedOpened, isMenuOpened, isSearchOpened } = this.state;

    return (
      <div ref={this.containerRef}>
        <Container className="snow p-0" fluid onKeyDown={this.onKeyDownHandler} tabIndex={0}>
          <Row className={classnames('snow-col', { 'feed-opened': isFeedOpened, 'menu-opened': isMenuOpened, 'search-opened': isSearchOpened })} noGutters>
            <Col className="snow-col-feed" xs='auto'>
              <NewsFeed isMenuOpened={isMenuOpened} isSearchOpened={isSearchOpened} isFeedOpened={isDesktop || isFeedOpened} onFeedPanelOpen={this.toggleFeedPanel} />
            </Col>
            <Col className="snow-col-main">
              <div className={classnames('main', { 'menu-opened': isMenuOpened })}>
                <Header isMenuOpened={isMenuOpened} isSearchOpened={isSearchOpened} onMenuToggle={this.toggleMenu} onSearchToggle={this.toggleSearch} />

                {
                  isMenuOpened ?
                    <Menu /> :
                    <Fragment>
                      <Route exact path="/" component={() => <Home />} />
                      <Route path="/inner" component={() => <InnerWrapper />} />
                      <Footer />
                    </Fragment>
                }

                <div className="blackout " />
                {
                  isSearchOpened && <Search />
                }
              </div>
            </Col>
          </Row>
          <ReactResizeDetector handleWidth onResize={this.onResize} />
        </Container>
      </div>
    );
  }
}

export default MainPage;
