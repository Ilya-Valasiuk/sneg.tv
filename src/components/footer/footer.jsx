import React from 'react';
import { Row, Col } from 'reactstrap';
import { FooterLinks } from './footer-links';

import './footer.scss'

export function Footer({ }) {
  return (
    <footer className="footer">
      <div className="footer-subscribe d-flex align-items-center flex-column py-5">
        <p className="footer-subscribe-title mb-4">Подпишитесь на рассылку, чтобы быть в курсе первым</p>
        <div className="footer-subscribe-block d-flex">
          <input className="px-3" type="text" name="subscribe" id="subscribe" placeholder="Введите ваш адресс email" />
          <span className=""><i className="fab fa-telegram-plane"></i></span>
        </div>
      </div>
      <div className="footer-info">
        <Row noGutters className="p-3">
          <Col xs={6} className="footer-info-text pr-2">
            <p className="footer-logo text-white">снег.<span className="text-blue">tv</span></p>
            <p>© 2018 Интернет-газета «Sneg»</p>
            <p>
              Исключительные права на фото- и иные материалы принадлежат авторам. Любое размещение материалов на сторонних ресурсах необходимо согласовывать с правообладателями.
              <br />
              <br />
              По всем вопросам обращайтесь на <a className="text-white" href="mailto:info@sneg.tv">info@sneg.tv</a>
              <br />
              <br />
              Нашли опечатку? Выделите слово и нажмите <span className="text-white">Ctrl+Enter</span>
            </p>
          </Col>
          <Col xs='auto' className="size-14 footer-large-block">
            <FooterLinks title="ТЕМЫ" items={[
              { link: '#', title: 'Дедолларизация' },
              { link: '#', title: 'Отставки губернаторов' },
              { link: '#', title: 'Новые санкции США' },
              { link: '#', title: 'Отравление Скрипалей' },
              { link: '#', title: 'Кокорин и Мамаев' },
              { link: '#', title: 'Пенсионная реформа' },
            ]} />
          </Col>
          <Col xs='auto' className="size-14 footer-small-block">
            <FooterLinks title="РУБРИКИ" items={[
              { link: '#', title: 'Жизнь' },
              { link: '#', title: 'Знания' },
              { link: '#', title: 'Эмоции' },
            ]} />
          </Col>
          <Col xs='auto' className="size-14 footer-medium-block">
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