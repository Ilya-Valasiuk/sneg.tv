import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { NewsFeedCollapsed } from './news-feed-collapsed';
import { NewsFeedExpanded } from './news-feed-expanded';
import { NewsFeedOverlay } from './news-feed-overlay';

import './news-feed.scss';

export class NewsFeed extends Component {
  render() {
    const { isFeedOpened, isMenuOpened, isSearchOpened, onFeedPanelOpen } = this.props;
    console.log(isSearchOpened);

    return (
      <Container className={classnames('news-feed', { 'collapsed': isFeedOpened, 'expanded': !isFeedOpened })}>
        {
          isMenuOpened ?
            <NewsFeedOverlay isShort={!isFeedOpened} /> :
            <Fragment>
              {
                isFeedOpened ? <NewsFeedCollapsed /> : <NewsFeedExpanded onToggle={onFeedPanelOpen} />
              }
            </Fragment>
        }
        {isSearchOpened &&
          <div className={classnames('search-overlay-wrapper', { 'search-overlay-wrapper-collapsed': !isFeedOpened })}><NewsFeedOverlay isShort={!isFeedOpened} isSearch /></div>}
      </Container >
    );
  }
}
