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

  constructor(props) {
    super(props);

    this.scroll = React.createRef();
  }

  next = () => {
    this.scroll.current.scrollLeft += 100;
  }

  prev = () => {
    this.scroll.current.scrollLeft -= 100;
  }

  select = id => {
    this.setState({ selectedIndex: id });
  }

  render() {
    const { style } = this.props;

    return (
      <div style={style} className="header-news d-flex align-items-center">
        <div className="header-news-wrapper" ref={this.scroll}>
          <Row noGutters className="flex-nowrap h-100 font-weight-500 ml-1">
            {HEADER_NEWS_DATA.map(({ title, id, link }, index) =>
              <Col className="px-3" xs="auto" key={id}>
                <Link onClick={() => this.select(index)} href={link} className={classnames('d-block py-3', { 'active': index === this.state.selectedIndex })} >{title}</Link>
              </Col>
            )}
          </Row>
        </div>
        <Row className="header-news-navigator px-1 h-100 align-items-center" noGutters>
          <Col className="text-center size-14 pointer px" xs={6} onClick={this.prev}>
            <i className="fas fa-chevron-left"></i>
          </Col>
          <Col className="text-center size-14 pointer px" xs={6} onClick={this.next}>
            <i className="fas fa-chevron-right"></i>
          </Col>
        </Row>
      </div>
    );
  }
};
