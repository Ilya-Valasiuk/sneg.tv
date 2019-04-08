import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CloseIcon } from 'components/icons/close';
import { SimpleArticle } from 'components/simple-article/simple-article';

import './more-unit-popup.scss';

export function MoreUnitPopup({ title, articles, onMoreUnitToggle }) {
  return (
    <Container className="more-unit-popup">
      <Row className="more-unit-popup-title mb-0 align-items-center align-items-md-end" noGutters>
        <Col xs={12} className="d-flex justify-content-between align-items-center">
          <span>{title}</span>
          <span className="close" onClick={onMoreUnitToggle}><CloseIcon /></span>
        </Col>
        <Col xs={12} className="d-none d-md-block more-unit-popup-separator"><hr className="m-0" /></Col>
      </Row>
      <Row className="more-unit-popup-scoller py-2 py-md-5">
        {articles.map((unit, index) =>
          <Col xs={12} md={4} key={index}>
            <SimpleArticle id={unit.id} {...unit} />
            {articles.length - 1 !== index && <hr className="my-4 d-md-none" />}
          </Col>
        )}
      </Row>
    </Container>
  )
}