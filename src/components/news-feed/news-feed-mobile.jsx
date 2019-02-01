import React from 'react';
import { Container } from 'reactstrap';
import { NewsFeedList } from './news-feed-list';

// STUB DATA
import { NEWS_FEED_DATA } from './news-feed-data';

export function NewsFeedMobile({ onFeedPanelToggle }) {
  return (
    <Container className="news-feed news-feed-mobile pb-3">
      <NewsFeedList data={NEWS_FEED_DATA} onFeedPanelToggle={onFeedPanelToggle} isMobile />
    </Container>
  );
}