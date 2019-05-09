import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { Route } from 'react-router-dom';

import { NewsFeed } from 'components/news-feed/news-feed';
import { NewsFeedMobile } from 'components/news-feed/news-feed-mobile';
import { Header } from 'components/header/header';
import { HeaderMobile } from 'components/header/header-mobile';
import { Search } from 'components/search/search';
import { Menu } from 'components/menu/menu';
import { MenuMobile } from 'components/menu/menu-mobile';
import { Footer } from 'components/footer/footer';
import { NewsCommentsPopup } from 'components/news-block/news-comments/news-comments-popup';
import { CommentCreatorPopup } from 'components/news-block/news-comments/comment-creator-popup';
import { AuthenticationView } from 'components/authentication/authentication';
import { MoreUnitPopup } from 'components/more-unit-popup/more-unit-popup';

import { scrollToTop } from 'utils/shared';

import { Home } from 'pages/subpages/home';
import { Inner } from 'pages/subpages/inner';
import { AuthorArticles } from 'pages/subpages/author-articles';
import { SearchResults } from 'pages/subpages/search-results';
import { Profile } from 'pages/subpages/profile';
import { Contacts } from 'pages/subpages/contacts';
import { Editors } from 'pages/subpages/editors';
import { Commercial } from 'pages/subpages/commercial';
import { Rubrics } from 'pages/subpages/rubrics';
import { Tags } from 'pages/subpages/tags';
import { Life } from 'pages/subpages/life';

import { STUB_UNIT_DATA } from 'pages/subpages/stub-data';

import './main.scss';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFeedOpened: false,
      isMenuOpened: false,
      isMobileFeedOpened: false,
      isSearchOpened: false,
      isShareOpened: false,
      isModalOpened: false,
      shouldShowCommnetsPopup: false,
      shouldShowMoreUnit: false,
      shouldShowCommnetCreatorPopup: false,
      shouldShowLogin: false,
      isDesktop: true,
      isMobile: false,
      isTabletSm: false
    };

    this.containerRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.resetAllFlags();
    }
  }

  saveScrollPosition = () => {
    this.prevSrollState = window.document.querySelector('.snow-col-main').scrollTop;

    window.document.querySelector('.snow-col-main').scrollTop = 0;
  }

  restoreScrollPosition = () => {
    window.document.querySelector('.snow-col-main').scrollTop = this.prevSrollState;
  }

  toggleMenu = () => {
    this.setState(
      ({ isMenuOpened }) => ({
        isMenuOpened: !isMenuOpened,
        isSearchOpened: false
      }),
      () => {
        if (this.state.isMobile) {
          scrollToTop();
        }
      }
    );
  };

  toggleSearch = () => {
    this.setState(({ isSearchOpened }) => ({
      isMenuOpened: false,
      isSearchOpened: !isSearchOpened
    }));
  };

  toggleFeedPanel = () => {
    this.setState(({ isFeedOpened }) => ({ isFeedOpened: !isFeedOpened }));
  };

  toggleMobileFeedPanel = () => {
    this.setState(
      ({ isMobileFeedOpened }) => ({
        isMobileFeedOpened: !isMobileFeedOpened,
        isMenuOpened: false,
        isSearchOpened: false
      }),
      () => {
        scrollToTop();
      }
    );
  };

  toggleShare = () => {
    this.setState(({ isShareOpened }) => ({
      isShareOpened: !isShareOpened,
      isMobileFeedOpened: false,
      isMenuOpened: false,
      isSearchOpened: false
    }));
  };

  toggleCommentsPopup = () => {
    if (!this.state.shouldShowCommnetsPopup) {
      this.saveScrollPosition();
    }
    this.setState(
      ({ shouldShowCommnetsPopup }) => ({
        shouldShowCommnetsPopup: !shouldShowCommnetsPopup
      }),
      () => {
        if (!this.state.shouldShowCommnetsPopup) {
          this.restoreScrollPosition();
        }
      }
    );
  };

  toggleMoreUnit = () => {
    if (!this.state.shouldShowMoreUnit) {
      this.saveScrollPosition();
    }
    this.setState(
      ({ shouldShowMoreUnit }) => ({
        shouldShowMoreUnit: !shouldShowMoreUnit
      }),
      () => {
        if (!this.state.shouldShowMoreUnit) {
          this.restoreScrollPosition();
        }
      }
    );
  };

  toggleLogin = () => {
    this.setState({
      shouldShowLogin: !this.state.shouldShowLogin,
      isMenuOpened: false,
    })
  }

  toggleModal = () => {
    this.setState({
      isModalOpened: !this.state.isModalOpened,
    });
  }

  resetAllFlags = () => {
    this.setState({
      isFeedOpened: false,
      isMenuOpened: false,
      isMobileFeedOpened: false,
      isSearchOpened: false,
      isShareOpened: false,
      isModalOpened: false,
      shouldShowCommnetsPopup: false,
      shouldShowCommnetCreatorPopup: false,
      shouldShowMoreUnit: false,
      shouldShowLogin: false,
    });
  };

  toggleCommentCreatorPopup = () => {
    this.setState(({ shouldShowCommnetCreatorPopup }) => ({
      shouldShowCommnetCreatorPopup: !shouldShowCommnetCreatorPopup
    }));
  };

  search = searchValue => {
    this.resetAllFlags();
    this.props.history.push(`/search?value=${searchValue}`);
  };

  openProfile = () => {
    this.resetAllFlags();
    this.props.history.push(`/profile`);
  }

  onKeyDownHandler = event => {
    if (event.keyCode === 27) {
      if (!this.state.isDesktop && this.state.isFeedOpened) {
        this.toggleFeedPanel();
        return;
      }

      if (this.state.isMenuOpened || this.state.isSearchOpened) {
        this.setState({
          isMenuOpened: false,
          isSearchOpened: false
        });
        return;
      }
    }
  };

  onResize = width => {
    const isMobile = width < 768;
    const prevMobileState = this.state.isMobile;

    this.setState(
      {
        isDesktop: width >= 1280,
        isTabletSm: width >= 768 && width < 1024,
        isMobile
      },
      () => {
        if (prevMobileState !== this.state.isMobile) {
          const evt = new CustomEvent("mobile-change", {
            detail: { isMobile }
          });
          document.dispatchEvent(evt);
        }
      }
    );
  };

  onBodyClick = event => {
    if (this.state.isFeedOpened) {
      if (event.target.closest(".snow-col-main")) {
        this.toggleFeedPanel();
      }
    } else if (this.state.shouldShowLogin) {
      if (!event.target.closest(".authentication") && event.target.closest(".snow")) {
        this.toggleLogin();
      }
    }
  };

  componentDidMount = () => {
    const containerEl = this.containerRef.current;

    if (containerEl) {
      containerEl.addEventListener("click", this.onBodyClick);
    }
  };

  componentWillUnmount = () => {
    const containerEl = this.containerRef.current;

    if (containerEl) {
      containerEl.removeEventListener("click", this.onBodyClick);
    }
  };

  render() {
    const {
      isDesktop,
      isMobile,
      isTabletSm,
      isFeedOpened,
      isMenuOpened,
      isSearchOpened,
      isMobileFeedOpened,
      isShareOpened,
      shouldShowCommnetsPopup,
      shouldShowMoreUnit,
      shouldShowCommnetCreatorPopup,
      shouldShowLogin,
      isModalOpened,
    } = this.state;
    const MenuComponent = isMobile ? MenuMobile : Menu;
    const searchParam = this.props.location.search;
    let classPrefix;
    if (searchParam && searchParam.split('?test=')[1]) {
      classPrefix = `test-${searchParam.split('?test=')[1]}`;
    }

    return (
      <div ref={this.containerRef}>
        <Container
          className={classnames('snow p-0', classPrefix, { 'blackout-all': shouldShowLogin && !isMobile })}
          fluid
          onKeyDown={this.onKeyDownHandler}
          tabIndex={0}
        >
          <Row
            className={classnames("snow-col", {
              "feed-opened": isFeedOpened,
              "menu-opened": isMenuOpened,
              "search-opened": isSearchOpened,
              "modal-opened": isModalOpened,
              "popup-opened":
                isMobileFeedOpened ||
                shouldShowCommnetsPopup ||
                shouldShowCommnetCreatorPopup ||
                shouldShowMoreUnit
            })}
            noGutters
          >
            <Col className="snow-col-feed" xs="auto">
              <NewsFeed
                isMenuOpened={isMenuOpened}
                isSearchOpened={isSearchOpened}
                isFeedOpened={isDesktop || isFeedOpened}
                onFeedPanelOpen={this.toggleFeedPanel}
                searchProps={this.props.location}
              />
              <div className="feed-blackout " />
            </Col>
            <Col className="snow-col-main" id="snow-col-main">
              <div
                className={classnames("main", { "menu-opened": isMenuOpened })}
              >
                {isMobile ? (
                  <HeaderMobile
                    isMenuOpened={isMenuOpened}
                    onMenuToggle={this.toggleMenu}
                    onFeedPanelToggle={this.toggleMobileFeedPanel}
                    isFeedPanelOpened={isMobileFeedOpened}
                    isShareOpened={isShareOpened}
                    onShareToggle={this.toggleShare}
                  />
                ) : (
                    <Header
                      isMenuOpened={isMenuOpened}
                      isSearchOpened={isSearchOpened}
                      onMenuToggle={this.toggleMenu}
                      onSearchToggle={this.toggleSearch}
                      toggleLoginView={this.toggleLogin}
                    />
                  )}
                <div className="snow-col-main-content">
                  <Route exact path="/" render={props => (
                    <Home
                      {...props}
                      isMobile={isMobile}
                      isTabletSm={isTabletSm}
                      onMoreUnitToggle={this.toggleMoreUnit}
                    />
                  )}
                  />
                  <Route exact path="/inner" render={props => (
                    <Inner
                      {...props}
                      isMobile={isMobile}
                      isTabletSm={isTabletSm}
                      onToggleCommentsPopup={this.toggleCommentsPopup}
                      onModalToggle={this.toggleModal}
                    />
                  )}
                  />
                  <Route exact path="/author-articles" render={props => (
                    <AuthorArticles
                      {...props}
                      isMobile={isMobile}
                      isTabletSm={isTabletSm}
                    />
                  )}
                  />

                  <Route exact path="/search" render={props => (
                    <SearchResults
                      onSearch={this.search}
                      isMobile={isMobile}
                      isTabletSm={isTabletSm}
                    />
                  )}
                  />
                  <Route exact path="/profile" render={props => (
                    <Profile
                      isMobile={isMobile}
                      isTabletSm={isTabletSm}
                    />
                  )}
                  />
                  <Route exact path="/life" render={props => (
                    <Life isMobile={isMobile} isTabletSm={isTabletSm} />
                  )}
                  />
                  <Route exact path="/tags" render={props => (
                    <Tags isMobile={isMobile} isTabletSm={isTabletSm} />
                  )}
                  />
                  <Route exact path="/rubrics" render={props => (
                    <Rubrics isMobile={isMobile} isTabletSm={isTabletSm} />
                  )}
                  />
                  <Route exact path="/contacts" render={props => (
                    <Contacts isMobile={isMobile} isTabletSm={isTabletSm} />
                  )}
                  />
                  <Route exact path="/editors" render={props => (
                    <Editors isMobile={isMobile} isTabletSm={isTabletSm} />
                  )}
                  />
                  <Route exact path="/commercial" render={props => (
                    <Commercial isMobile={isMobile} isTabletSm={isTabletSm} />
                  )}
                  />
                </div>
                <Footer />
                {isSearchOpened && <Search onSearch={this.search} />}
              </div>
              {isMenuOpened && <MenuComponent onSearch={this.search} toggleLoginView={this.toggleLogin} />}
              {isMobileFeedOpened && (
                <NewsFeedMobile
                  onFeedPanelToggle={this.toggleMobileFeedPanel}
                />
              )}
              {shouldShowCommnetsPopup && (
                <NewsCommentsPopup
                  onToggleCommentCreatorPopup={this.toggleCommentCreatorPopup}
                  onToggleCommentsPopup={this.toggleCommentsPopup}
                />
              )}
              {shouldShowMoreUnit && (
                <MoreUnitPopup {...STUB_UNIT_DATA.life} onMoreUnitToggle={this.toggleMoreUnit} />
              )}
              {shouldShowCommnetCreatorPopup && (
                <CommentCreatorPopup
                  onToggleCommentCreatorPopup={this.toggleCommentCreatorPopup}
                />
              )}
              {shouldShowLogin && (
                <AuthenticationView onLogin={this.openProfile} onClose={this.toggleLogin} />
              )}
              <div className="main-blackout " />
            </Col>
          </Row>
          <ReactResizeDetector handleWidth onResize={this.onResize} />
        </Container>
      </div>
    );
  }
}

export default MainPage;
