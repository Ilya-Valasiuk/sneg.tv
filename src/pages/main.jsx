import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { NewsFeed } from './../components/news-feed/news-feed';
import { Home } from './../components/home/home';

class MainPage extends Component {
  render() {
    return (
      <Container className="snow p-0" fluid>
        <Row className="snow-col" noGutters>
          <Col className="snow-col-feed" xs='auto'>
            <NewsFeed />
          </Col>
          <Col className="snow-col-main" xs='auto'>
            <Home />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
