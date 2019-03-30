import React from 'react';
import { Row, Col } from 'reactstrap';

import './contacts.scss';

export function Contacts() {
  return (
    <div className="contacts">
      <Row className="contacts-header align-items-center mb-3">
        <Col xs="12" md="auto">Контактная информация</Col>
        <Col className="d-none d-md-block"><hr /></Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <h2 className="contacts-title mb-4">Интернет-издание Снег.tv</h2>
          <div className="mb-4">
            <p className="contacts-section-title mb-0">Горячая линия</p>
            <p className="contacts-number">8 800 2000 654</p>
          </div>
          <div className="mb-4">
            <a className="contacts-link" href="mailto:info@sneg.tv">info@sneg.tv</a>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <p className="contacts-section-title-bold ">Рекламная служба</p>
              <p className="contacts-section-title">Коммерческий директор <br /> Лариса Капустина</p>
              <a className="contacts-link d-block mb-3" href="mailto:reklama@sneg.tv">reklama@sneg.tv</a>
            </Col>
            <Col xs={12} md={6}>
              <a className="contacts-section-title" href="tel:+74955551234">+7 495 555-12-34</a>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <p className="contacts-section-title-bold">Пресс-служба</p>
              <p className="contacts-section-title">Начальник отдела <br /> Константин Семенов</p>
              <a className="contacts-link d-block mb-3" href="mailto:pr@sneg.tv">pr@sneg.tv</a>
            </Col>
            <Col xs={12} md={6}>
              <a className="contacts-section-title" href="tel:+74955551234">+7 495 555-12-34</a>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <p className="contacts-section-title-bold mb-2">Лицензирование</p>
              <a className="contacts-link d-block mb-3" href="mailto:license@sneg.tv">license@sneg.tv</a>
            </Col>
            <Col xs={12} md={6}>
              <a className="contacts-section-title" href="tel:+74955551234">+7 495 555-12-34</a>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <p className="contacts-section-title-bold mb-2">Редакция</p>
              <p className="contacts-section-title">Шеф-редактор <br /> Виктор Степанов</p>
              <p className="contacts-section-title">Редактор <br /> Ольга Васильева</p>
              <a className="contacts-link d-block mb-3" href="mailto:redactor@sneg.tv">redactor@sneg.tv</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}