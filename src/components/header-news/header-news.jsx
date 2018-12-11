import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from '../shared/link/link';

// STUB DATA
import { HEADER_NEWS_DATA } from './header-news-data';

import './header-news.scss';

export class HeaderNews extends Component {
  state = {
    selectedIndex: 0,
  }

  next = () => {
    let nextIndex = this.state.selectedIndex + 1;
    if (nextIndex > HEADER_NEWS_DATA.length - 1) {
      nextIndex = 0;
    }

    this.setState({ selectedIndex: nextIndex });
  }

  prev = () => {
    let prevIndex = this.state.selectedIndex - 1;
    if (prevIndex < 0) {
      prevIndex = HEADER_NEWS_DATA.length - 1;
    }

    this.setState({ selectedIndex: prevIndex });
  }

  render() {
    const { style } = this.props;
    
    return (
      <div style={style} className="header-news d-flex align-items-center">
        <Row noGutters className="header-news-wrapper flex-nowrap h-100 font-weight-500">
          {HEADER_NEWS_DATA.map(({ title, id, link }, index) =>
            <Col className="px-3" xs="auto" key={id}>
              <Link href={link} className={classnames('d-block py-3', { 'active': index === this.state.selectedIndex })} >{title}</Link>
            </Col>
          )}
        </Row>
        <Row className="header-news-navigator px-1 h-100 align-items-center" noGutters>
          <Col className="text-center size-14 pointer px" xs={6} onClick={this.prev}>
            <i class="fas fa-chevron-left"></i>
          </Col>
          <Col className="text-center size-14 pointer px" xs={6} onClick={this.next}>
            <i class="fas fa-chevron-right"></i>
          </Col>
        </Row>
      </div>
    );
  }
};
