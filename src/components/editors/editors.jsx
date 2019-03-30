import React from 'react';
import { Row, Col } from 'reactstrap';
import { authorCologneImg } from 'img/news';

import './editors.scss';

export function Editors() {
  return (
    <div className="editors">
      <Row className="editors-header align-items-center mb-3">
        <Col xs="12" md="auto">Редакция</Col>
        <Col className="d-none d-md-block"><hr /></Col>
      </Row>
      <Row>
        <Col xs={12} md="auto">
          <div className="text-center">
            <img src={authorCologneImg} alt="main editor" className="img-fluid mb-3" />
          </div>
          <p className="editors-title mb-2">Главный редактор</p>
          <p className="editors-text mb-0">Виктор Степанов</p>
          <a className="editors-text" href="tel:+74955551234">+7 495 555-12-34</a>
          <a className="editors-link d-block mb-3" href="mailto:chief@sneg.tv">chief@sneg.tv</a>
          <hr className="d-md-none" />
        </Col>
        <Col xs={12} md="">
          <p className="editors-title mb-1">Об издании</p>
          <p className="editors-text">Мы независимое медиа, объединившее журналистов-расследователей и репортеров. Мы делаем то, что умеем лучше всего, — находим скрытое и важное и подробно рассказываем об этом вам. Мы считаем это необходимым, потому что в России почти не осталось СМИ, которые берутся за сложные и опасные темы. Следите за нашими новыми материалами в Facebook, VK, Twitter, Youtube, Дзен, Telegram или подпишитесь на почтовую рассылку.</p>
          <p className="editors-title mb-2">Редакционная коллегия</p>
          <Row>
            <Col xs={12} md={6}>
              <p className="editors-text-normal font-weight-900 mb-0">Главный редактор</p>
              <p className="editors-text">Лариса Капустина</p>
            </Col>
            <Col xs={12} md={6}>
              <p className="editors-text-normal font-weight-900 mb-0">Зам. главного редактора</p>
              <p className="editors-text">Лариса Капустина</p>
            </Col>
            <Col xs={12} md={6} className="mb-5">
              <p className="editors-text-normal font-weight-900 mb-0">Секретарь</p>
              <p className="editors-text">Константин Семенов</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p className="editors-title mb-1">Журналисты</p>
            </Col>
            <Col xs={12} md={6}>
              <p className="editors-text-normal font-weight-900 mb-0">Оперативная информация</p>
              <p className="editors-text">Сергей Александров</p>
            </Col>
            <Col xs={12} md={6}>
              <p className="editors-text-normal font-weight-900 mb-0">Политика и общество</p>
              <p className="editors-text">Константин Семенов</p>
            </Col>
            <Col xs={12} md={6}>
              <p className="editors-text-normal font-weight-900 mb-0">Коммуникации</p>
              <p className="editors-text">Константин Семенов</p>
            </Col>
            <Col xs={12} md={6} className="mb-5">
              <p className="editors-text-normal font-weight-900 mb-0">Досуг</p>
              <p className="editors-text">Константин Семенов</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p className="editors-title mb-1">Офис</p>
            </Col>
            <Col xs={12} md={6}>
              <p className="editors-text-normal font-weight-900 mb-0">Главный бухгалтер</p>
              <p className="editors-text">Лариса Капустина</p>
            </Col>
            <Col xs={12} md={6}>
              <p className="editors-text-normal font-weight-900 mb-0">Офис-менеджер</p>
              <p className="editors-text">Лариса Капустина</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}