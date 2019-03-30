import React from 'react';
import { Row, Col } from 'reactstrap';

import './commercial.scss';

export function Commercial() {
  return (
    <div className="commercial">
      <Row className="commercial-header align-items-center mb-3">
        <Col xs="12" md="auto">Реклама на сайте</Col>
        <Col className="d-none d-md-block"><hr /></Col>
      </Row>
      <Row className="mb-md-3">
        <Col xs={12} md={8}>
          <p className="commercial-content">По вопросам размещения рекламы на сайте обращайтесь к специалистам отдела маркетинга.  </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <p className="commercial-title mb-0">Руководитель отдела</p>
          <p className="commercial-text mb-0">Виктор Степанов</p>
          <a className="commercial-text" href="tel:+74955551234">+7 495 555-12-34</a>
          <a className="commercial-link d-block mb-3" href="mailto:chief@sneg.tv">chief@sneg.tv</a>
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12}><p className="commercial-title">Специалисты</p></Col>
          </Row>
          <Row className="mb-3 mb-md-0">
            <Col xs={12} md={6}>
              <p className="commercial-text-normal font-weight-bold mb-0">Отдел продаж</p>
              <p className="commercial-text mb-3">Лариса Капустина</p>
            </Col>
            <Col xs={12} md={6}>
              <a className="commercial-text" href="tel:+74955551234">+7 495 555-12-34</a>
            </Col>
          </Row>
          <Row className="mb-3 mb-md-0">
            <Col xs={12} md={6}>
              <p className="commercial-text-normal font-weight-bold mb-0">Маркетолог</p>
              <p className="commercial-text mb-3">Лариса Капустина</p>
            </Col>
            <Col xs={12} md={6}>
              <a className="commercial-text" href="tel:+74955551234">+7 495 555-12-34</a>
            </Col>
          </Row>
          <Row className="mb-3 mb-md-0">
            <Col xs={12} md={6}>
              <p className="commercial-text-normal font-weight-bold mb-0">Секретарь</p>
              <p className="commercial-text mb-3">Константин Семенов</p>
            </Col>
            <Col xs={12} md={6}>
              <a className="commercial-text" href="tel:+74955551234">+7 495 555-12-34</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div >
  );
}