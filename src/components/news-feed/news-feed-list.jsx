import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { AdBanner } from '../ad-banner/ad-baner';
import { NewsFeedItem } from './news-feed-item';


export function NewsFeedList({ data, isMobile, className }) {
  return (
    <Row className={classnames('news-feed-list', className)}>
      <Col>
        <p className="news-feed-title font-weight-900 mb-3 pt-2">ЛЕНТА НОВОСТЕЙ</p>
      </Col>
      {
        data.map(({ text, date }, index) => {
          // TODO: узнать логику работы банеров на макете
          const shouldShowBanner = index && (index === 2 || index === 12);

          return (<Col className={classnames('mb-3', { 'news-feed-banner text-center': shouldShowBanner, 'px-0': !isMobile && shouldShowBanner })} xs={12} key={text + date}>
            {
              shouldShowBanner ? <AdBanner /> : <NewsFeedItem text={text} date={date} />
            }
          </Col>
          )
        })
      }
    </Row>
  );
}
