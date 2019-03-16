import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'components/shared/link/link';

import './vertical-carousel.scss';

const STEP_LENGHT = 800;

export class VerticalCarousel extends Component {
  state = {
    selectedIndex: 0,
  }

  constructor(props) {
    super(props);

    this.scroll = React.createRef();
  }

  next = () => {
    this.scroll.current.scrollLeft += STEP_LENGHT;
  }

  prev = () => {
    this.scroll.current.scrollLeft -= STEP_LENGHT;
  }

  select = id => {
    this.setState({ selectedIndex: id });

    if (this.props.onTabChange) {
      const selectedTab = this.props.data.filter(tab => id === tab.id )[0];
      
      this.props.onTabChange(selectedTab);
    }
  }

  render() {
    const { style, data } = this.props;

    return (
      <div style={style} className="vertical-carousel d-flex align-items-center">
        <div className="vertical-carousel-wrapper" ref={this.scroll}>
          <Row noGutters className="vertical-carousel-scroll flex-nowrap h-100 font-weight-500 ml-1">
            {data.map(({ title, id, link }, index) =>
              <Col className="px-3" xs="auto" key={id}>
                <Link onClick={() => this.select(index)} href={link} className={classnames('d-block py-3', { 'active': index === this.state.selectedIndex })} >{title}</Link>
              </Col>
            )}
          </Row>
        </div>
        <div className="vertical-carousel-shadow"></div>
        <Row className="vertical-carousel-navigator px-1 h-100 align-items-center" noGutters>
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
