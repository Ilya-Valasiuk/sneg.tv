import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { SnowLogo } from '../snow-logo/snow-logo';
import { NewsFeedList } from './news-feed-list';

// STUB DATA
import { NEWS_FEED_DATA } from './news-feed-data';

export function NewsFeedCollapsed({ isMenuOpened }) {
  return (
    <Fragment>
      <Row className="news-feed-sticky">
        <Col className="px-0">
          <SnowLogo />
          {/* {!isMenuOpened && <div className="news-feed-add d-flex align-items-center justify-content-center rounded-circle"><i className="fas fa-plus"></i></div>} */}
        </Col>
      </Row>
      <NewsFeedList data={NEWS_FEED_DATA} className="pt-4" />
    </Fragment>
  );
}
