import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from '../shared/link/link';

// STUB DATA
import { HEADER_NEWS_DATA } from './header-news-data';

import './header-news.css';

export function HeaderNews() {
  return (
    <div className="header-news d-flex align-items-center">
      <Row noGutters className="header-news-wrapper flex-nowrap h-100">
        {HEADER_NEWS_DATA.map(({ title, id, link }) =>
          <Col className="px-3" xs="auto" key={id}>
            <Link href={link} className="d-block py-3" >{title}</Link>
          </Col>
        )}
      </Row>
    </div>
  );
};
