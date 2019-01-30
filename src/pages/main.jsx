import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { NewsFeed } from './../components/news-feed/news-feed';
import { NewsFeedMobile } from './../components/news-feed/news-feed-mobile';
import { Header } from '../components/header/header';
import { HeaderMobile } from '../components/header/header-mobile';
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
      isMobileFeedOpened: false,
      isSearchOpened: false,
      isDesktop: true,
      isMobile: false,
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

  toggleMobileFeedPanel = () => {
    this.setState(({ isMobileFeedOpened }) => ({ isMobileFeedOpened: !isMobileFeedOpened, isMenuOpened: false, isSearchOpened: false }));
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
    console.log(width);
    this.setState({
      isDesktop: width >= 1280,
      isMobile: width < 768,
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
    const { isDesktop, isMobile, isFeedOpened, isMenuOpened, isSearchOpened, isMobileFeedOpened } = this.state;

    return (
      <div ref={this.containerRef}>
        <Container className="snow p-0" fluid onKeyDown={this.onKeyDownHandler} tabIndex={0}>
          <Row className={classnames('snow-col', { 'feed-opened': isFeedOpened, 'menu-opened': isMenuOpened, 'search-opened': isSearchOpened, 'feed-mobile-opened': isMobileFeedOpened })} noGutters>
            <Col className="snow-col-feed" xs='auto'>
              <NewsFeed isMenuOpened={isMenuOpened} isSearchOpened={isSearchOpened} isFeedOpened={isDesktop || isFeedOpened} onFeedPanelOpen={this.toggleFeedPanel} />
            </Col>
            <Col className="snow-col-main">
              <div className={classnames('main', { 'menu-opened': isMenuOpened })}>
                {
                  isMobile ? <HeaderMobile isMenuOpened={isMenuOpened} onMenuToggle={this.toggleMenu} onFeedPanelToggle={this.toggleMobileFeedPanel} isFeedPanelOpened={isMobileFeedOpened} /> : <Header isMenuOpened={isMenuOpened} isSearchOpened={isSearchOpened} onMenuToggle={this.toggleMenu} onSearchToggle={this.toggleSearch} />
                }
                {
                  isMenuOpened ?
                    <Menu /> :
                    <Fragment>
                      <Route exact path="/" render={props => (
                        <Home {...props} isMobile={isMobile} />
                      )} />
                      <Route exact path="/inner" render={props => (
                        <InnerWrapper {...props} isMobile={isMobile} />
                      )} />
                      <Footer />
                    </Fragment>
                }

                <div className="blackout " />
                {
                  isSearchOpened && <Search />
                }
              </div>
              {isMobileFeedOpened && <NewsFeedMobile onFeedPanelToggle={this.toggleMobileFeedPanel} />}
            </Col>
          </Row>
          <ReactResizeDetector handleWidth onResize={this.onResize} />
        </Container>
      </div>
    );
  }
}

export default MainPage;
