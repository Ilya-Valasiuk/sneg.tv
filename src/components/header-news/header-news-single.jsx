import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { HeaderLoading } from './header-loading';
import { Link as RouterLink } from "react-router-dom";
import { CloseIcon } from './../icons/close';

import './header-news.scss';

export class HeaderNewsSingle extends Component {
  render() {
    const { title, progress } = this.props;

    return (
      <Row className="header-news d-flex align-items-center" noGutters>
        <Col>
          <h3 className="header-news-text mb-0 text-uppercase">{title}</h3>
        </Col>
        <Col xs='auto' className="pr-3">
          <RouterLink to="/">
            <CloseIcon />
          </RouterLink>
        </Col>
        <HeaderLoading progress={progress} />
      </Row>
    );
  }
};
