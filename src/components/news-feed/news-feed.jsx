import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { AdBanner } from '../ad-banner/ad-baner';
import { SnowLogo } from '../snow-logo/snow-logo';
import { NewsFeedItem } from './news-feed-item';
import { NewsFeedCollapsed } from './news-feed-collapsed';
import { NewsFeedExpanded } from './news-feed-expanded';

// STUB DATA
import { NEWS_FEED_DATA } from './news-feed-data';

import './news-feed.scss';

export class NewsFeed extends Component {
  state = {
    isCollapsed: false,
  }

  toggleFeed = () => {
    this.setState(({ isCollapsed }) => ({ isCollapsed: !isCollapsed }));
  }

  render() {
    const { isCollapsed } = this.state;

    return (
      <Container className={classnames('news-feed', { 'collapsed': isCollapsed, 'expanded': !isCollapsed })}>
        {
          isCollapsed ? <NewsFeedCollapsed /> : <NewsFeedExpanded onToggle={this.toggleFeed} />
        }
      </Container>
    );
  }
}
