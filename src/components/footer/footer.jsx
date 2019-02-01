import React from 'react';
import { Row, Col } from 'reactstrap';
import { Subscribe } from './../shared/subscribe/subscribe';
import { InfoText } from './../shared/info-text/info-text';
import { FooterLinks } from './footer-links';

import './footer.scss'

export function Footer({ }) {
  return (
    <footer className="footer">
      <Subscribe className="py-5 px-3" />
      <div className="footer-info">
        <Row noGutters className="p-3">
          <Col xs={12} md={6} className="pr-2">
            <InfoText />
          </Col>
          <Col xs='auto' className="size-14 footer-large-block d-none d-md-block">
            <FooterLinks title="ТЕМЫ" items={[
              { link: '#', title: 'Дедолларизация' },
              { link: '#', title: 'Отставки губернаторов' },
              { link: '#', title: 'Новые санкции США' },
              { link: '#', title: 'Отравление Скрипалей' },
              { link: '#', title: 'Кокорин и Мамаев' },
              { link: '#', title: 'Пенсионная реформа' },
            ]} />
          </Col>
          <Col xs='auto' className="size-14 footer-small-block d-none d-md-block">
            <FooterLinks title="РУБРИКИ" items={[
              { link: '#', title: 'Жизнь' },
              { link: '#', title: 'Знания' },
              { link: '#', title: 'Эмоции' },
            ]} />
          </Col>
          <Col xs='auto' className="size-14 footer-medium-block d-none d-md-block">
            <FooterLinks title="О НАС" items={[
              { link: '#', title: 'Контакты' },
              { link: '#', title: 'Редакция' },
              { link: '#', title: 'Реклама' },
            ]} />
          </Col>
        </Row>
     </div>  
    </footer> 
  );
}