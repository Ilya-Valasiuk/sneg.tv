import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import classnames from 'classnames';
import { NewsFeedCollapsed } from './news-feed-collapsed';
import { NewsFeedExpanded } from './news-feed-expanded';
import { NewsFeedOverlay } from './news-feed-overlay';

import './news-feed.scss';

export class NewsFeed extends Component {
  render() {
    const { isFeedOpened, isMenuOpened, isSearchOpened, onFeedPanelOpen } = this.props;

    return (
      <Container className={classnames('news-feed', { 'collapsed': isFeedOpened, 'expanded': !isFeedOpened })}>
        {
          isMenuOpened ?
            <NewsFeedOverlay isMenuOpened={isSearchOpened || isMenuOpened} isSearchOpened={isSearchOpened} isShort={!isFeedOpened} /> :
            <Fragment>
              {
                isFeedOpened ? <NewsFeedCollapsed isMenuOpened={isSearchOpened || isMenuOpened} /> : <NewsFeedExpanded isMenuOpened={isSearchOpened || isMenuOpened} onToggle={onFeedPanelOpen} />
              }
            </Fragment>
        }
        {isSearchOpened &&
          <div className={classnames('search-overlay-wrapper', { 'search-overlay-wrapper-collapsed': !isFeedOpened })}><NewsFeedOverlay isMenuOpened={isSearchOpened || isMenuOpened} isShort={!isFeedOpened} isSearch /></div>}
      </Container >
    );
  }
}
