import React from 'react';
import { Container } from 'reactstrap';
import { NewsFeedList } from './news-feed-list';
import { CloseIcon } from './../icons/close';

// STUB DATA
import { NEWS_FEED_DATA } from './news-feed-data';

export function NewsFeedMobile({ onFeedPanelToggle }) {
  return (
    <Container className="news-feed news-feed-mobile py-3">
      <div className="close-icon-wrapper" onClick={onFeedPanelToggle}><CloseIcon /></div>
      <NewsFeedList data={NEWS_FEED_DATA} isMobile />
    </Container>
  );
}