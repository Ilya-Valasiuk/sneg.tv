import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { HeaderLoading } from './header-loading';
import { Link as RouterLink } from "react-router-dom";
import { CloseIcon } from './../icons/close';

import './header-news.scss';

export class HeaderNewsSingle extends Component {
  state = {
    title: this.props.title,
    progress: this.props.progress,
  };

  changeHeaderHandler = e => {
    const [progress, title] = [e.detail.progress, e.detail.title];

    this.setState({ progress, title });
  }

  componentDidMount() {
    document.addEventListener('header-change', this.changeHeaderHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('header-change', this.changeHeaderHandler);
  }

  render() {
    const { hideCloseIcon } = this.props;
    const { title, progress } = this.state;

    return (
      <Row className="header-news d-flex align-items-center" noGutters>
        <Col>
          <h3 className="header-news-text mb-0 text-uppercase">{title}</h3>
        </Col>
        {
          !hideCloseIcon && <Col xs='auto' className="pr-3">
            <RouterLink to="/">
              <CloseIcon />
            </RouterLink>
          </Col>
        }

        <HeaderLoading progress={progress} />
      </Row>
    );
  }
};
