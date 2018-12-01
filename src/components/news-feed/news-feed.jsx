import React, { Component } from 'react';
import { Container } from 'reactstrap';
import classnames from 'classnames';
import { NewsFeedCollapsed } from './news-feed-collapsed';
import { NewsFeedExpanded } from './news-feed-expanded';

import './news-feed.scss';

export class NewsFeed extends Component {

  toggleFeed = () => {
    this.props.onFeedPanelOpen(!this.props.isFeedOpened);
  }

  render() {
    const { isFeedOpened } = this.props;

    return (
      <Container className={classnames('news-feed', { 'collapsed': isFeedOpened, 'expanded': !isFeedOpened })}>
        {
          isFeedOpened ? <NewsFeedCollapsed /> : <NewsFeedExpanded onToggle={this.toggleFeed} />
        }
      </Container >
    );
  }
}
