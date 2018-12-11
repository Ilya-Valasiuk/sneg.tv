import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { SnowLogo } from '../snow-logo/snow-logo';

export function NewsFeedExpanded({ onToggle }) {
  return (
    <Fragment>
      <Row className="news-feed-sticky">
        <Col className="px-0">
          <SnowLogo isShort />
        </Col>
      </Row>
      <Row className="news-feed-list pt-4">
        <Col className="pointer">
          <div onClick={onToggle}>
            <i class="fas fa-caret-right ml-2"></i>
            <p className="news-feed-title mb-0">ЛЕНТА НОВОСТЕЙ</p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
