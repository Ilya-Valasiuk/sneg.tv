import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './header-news.scss';

export class HeaderNewsSingle extends Component {
  render() {
    const { text } = this.props;

    return (
      <Row className="header-news d-flex align-items-center" noGutters>
        <Col>
          <h3 className="header-news-text mb-0 text-uppercase">{text}</h3>
        </Col>
      </Row>
    );
  }
};
