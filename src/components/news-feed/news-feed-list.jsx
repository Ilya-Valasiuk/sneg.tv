import React from 'react';
import Sticky from 'react-sticky-el';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { AdBanner } from '../ad-banner/ad-baner';
import { NewsFeedItem } from './news-feed-item';
import { CloseIcon } from './../icons/close';

export function NewsFeedList({ data, isMobile, onFeedPanelToggle, className }) {
  return (
    <Row className={classnames('news-feed-list', className)}>
      <Col>
        {isMobile ?
          <Sticky scrollElement=".snow-col-main">
            <Row className="news-feed-title-sticky align-items-center">
              <Col>
                <p className="news-feed-title font-weight-900 mb-0">ЛЕНТА НОВОСТЕЙ</p>
              </Col>
              <Col xs="auto" className="close-icon-wrapper" onClick={onFeedPanelToggle}><CloseIcon /></Col>
            </Row>
          </Sticky> :
          <p className="news-feed-title font-weight-900 mb-3 pt-2">ЛЕНТА НОВОСТЕЙ</p>
        }
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
