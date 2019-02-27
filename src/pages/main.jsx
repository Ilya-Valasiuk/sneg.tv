import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import classnames from "classnames";
import ReactResizeDetector from "react-resize-detector";
import { Route } from "react-router-dom";

import { NewsFeed } from "components/news-feed/news-feed";
import { NewsFeedMobile } from "components/news-feed/news-feed-mobile";
import { Header } from "components/header/header";
import { HeaderMobile } from "components/header/header-mobile";
import { Search } from "components/search/search";
import { Menu } from "components/menu/menu";
import { MenuMobile } from "components/menu/menu-mobile";
import { Footer } from "components/footer/footer";
import { NewsCommentsPopup } from "components/news-block/news-comments/news-comments-popup";
import { CommentCreatorPopup } from "components/news-block/news-comments/comment-creator-popup";

import { Home } from "pages/subpages/home";
import { Inner } from "pages/subpages/inner";
import { SearchResults } from "pages/subpages/search-results";

import "./main.scss";

const scrollToTop = () => {
  const scrollCol = document.body.querySelector(".snow-col-main");

  if (scrollCol) scrollCol.scrollTo(0, 0);
};

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFeedOpened: false,
      isMenuOpened: false,
      isMobileFeedOpened: false,
      isSearchOpened: false,
      isShareOpened: false,
      shouldShowCommnetsPopup: false,
      shouldShowCommnetCreatorPopup: false,
      isDesktop: true,
      isMobile: false,
      isTabletSm: false
    };

    this.containerRef = React.createRef();
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
      this.prevSrollState = window.document.querySelector(
        ".snow-col-main"
      ).scrollTop;
    }
    this.setState(
      ({ shouldShowCommnetsPopup }) => ({
        shouldShowCommnetsPopup: !shouldShowCommnetsPopup
      }),
      () => {
        if (!this.state.shouldShowCommnetsPopup) {
          window.document.querySelector(
            ".snow-col-main"
          ).scrollTop = this.prevSrollState;
        }
      }
    );
  };

  resetAllFlags = () => {
    this.setState({
      isFeedOpened: false,
      isMenuOpened: false,
      isMobileFeedOpened: false,
      isSearchOpened: false,
      isShareOpened: false,
      shouldShowCommnetsPopup: false,
      shouldShowCommnetCreatorPopup: false
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
      shouldShowCommnetCreatorPopup
    } = this.state;
    const MenuComponent = isMobile ? MenuMobile : Menu;

    return (
      <div ref={this.containerRef}>
        <Container
          className="snow p-0"
          fluid
          onKeyDown={this.onKeyDownHandler}
          tabIndex={0}
        >
          <Row
            className={classnames("snow-col", {
              "feed-opened": isFeedOpened,
              "menu-opened": isMenuOpened,
              "search-opened": isSearchOpened,
              "popup-opened":
                isMobileFeedOpened ||
                shouldShowCommnetsPopup ||
                shouldShowCommnetCreatorPopup
            })}
            noGutters
          >
            <Col className="snow-col-feed" xs="auto">
              <NewsFeed
                isMenuOpened={isMenuOpened}
                isSearchOpened={isSearchOpened}
                isFeedOpened={isDesktop || isFeedOpened}
                onFeedPanelOpen={this.toggleFeedPanel}
              />
            </Col>
            <Col className="snow-col-main">
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
                    />
                  )}
                <div className="snow-col-main-content">
                  <Route exact path="/" render={props => (
                    <Home
                      {...props}
                      isMobile={isMobile}
                      isTabletSm={isTabletSm}
                    />
                  )}
                  />
                  <Route exact path="/inner" render={props => (
                    <Inner
                      {...props}
                      isMobile={isMobile}
                      isTabletSm={isTabletSm}
                      onToggleCommentsPopup={this.toggleCommentsPopup}
                    />
                  )}
                  />
                  <Route exact path="/search" render={props => (
                    <SearchResults
                      onSearch={this.search}
                      isMobile={isMobile}
                    />
                  )}
                  />
                </div>
                <Footer />
                {isSearchOpened && <Search onSearch={this.search} />}
              </div>
              {isMenuOpened && <MenuComponent onSearch={this.search} />}
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
              {shouldShowCommnetCreatorPopup && (
                <CommentCreatorPopup
                  onToggleCommentCreatorPopup={this.toggleCommentCreatorPopup}
                />
              )}
              <div className="blackout " />
            </Col>
          </Row>
          <ReactResizeDetector handleWidth onResize={this.onResize} />
        </Container>
      </div>
    );
  }
}

export default MainPage;
