import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { HeaderLoading } from './header-loading';

import './header-news.scss';

export class HeaderNewsSingle extends Component {
  render() {
    const { title, progress } = this.props;

    return (
      <Row className="header-news d-flex align-items-center" noGutters>
        <Col>
          <h3 className="header-news-text mb-0 text-uppercase">{title}</h3>
        </Col>
        <HeaderLoading progress={progress} />
      </Row>
    );
  }
};
