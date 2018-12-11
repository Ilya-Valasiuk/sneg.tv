import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { AdBanner } from '../ad-banner/ad-baner';
import { SnowLogo } from '../snow-logo/snow-logo';
import { NewsFeedItem } from './news-feed-item';

// STUB DATA
import { NEWS_FEED_DATA } from './news-feed-data';

export function NewsFeedCollapsed({ }) {
  return (
    <Fragment>
      <Row className="news-feed-sticky">
        <Col className="px-0">
          <SnowLogo />
          <div class="news-feed-add d-flex align-items-center justify-content-center rounded-circle"><i class="fas fa-plus"></i></div>
        </Col>
      </Row>
      <Row className="news-feed-list pt-4">
        <Col>
          <p className="news-feed-title mb-0">ЛЕНТА НОВОСТЕЙ</p>
        </Col>
        {
          NEWS_FEED_DATA.map(({ text, date }, index) => {
            const shouldShowBanner = index && index % 4 === 0;

            return (<Col className={shouldShowBanner ? 'px-0' : ''} xs={12} key={text + date}>
              {
                shouldShowBanner ? <AdBanner /> : <NewsFeedItem text={text} date={date} />
              }
            </Col>
            )
          })
        }
      </Row>
    </Fragment>
  );
}
