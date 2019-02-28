import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Links } from 'components/shared/links/links';
import { Subscribe } from 'components/shared/subscribe/subscribe';
import { Find } from 'components/shared/find/find';
import { InfoText } from 'components/shared/info-text/info-text';
import { SocialIcons } from 'components/shared/social-icons/social-icons';
import { UserIcon } from 'components/icons/user';

import './menu.scss'

export function MenuMobile({ onSearch }) {
  return (
    <div className="menu menu-mobile px-3 pb-3">
      <Row className="">
        <Col className="menu-mobile-day-info py-3" xs={12}>
          <div className="text-uppercase">Понедельник, 8 ОКТ 2018, 14:58</div>
          <span className="text-white">$</span> 65.90 <i className="fas fa-caret-up caret-green" />
          <span className="text-white ml-3">$</span> 76.31 <i className="fas fa-caret-down caret-red" />
        </Col>
        <Col xs={12} className="pt-4 pb-2 menu-user">
          <span className="mr-3"><UserIcon /></span> Личный кабинет
        </Col>
        <Col className="mb-3"><hr className="separator without-margins" /></Col>
        <Col xs={12} className="size-14 mb-5">
          <Links title="РАЗДЕЛЫ" titleClass="mb-4 menu-links-title" itemsClass="menu-mobile-links-item" items={[
            { link: '#', title: 'Жизнь' },
            { link: '#', title: 'Знания' },
            { link: '#', title: 'Эмоции' },
          ]} />
        </Col>
        <Col xs={12} className="size-14 mb-5">
          <Links title="РУБРИКИ" titleClass="mb-4 menu-links-title" itemsClass="menu-mobile-links-item" items={[
            { link: '#', title: 'Дедолларизация' },
            { link: '#', title: 'Отставки губернаторов' },
            { link: '#', title: 'Новые санкции США' },
            { link: '#', title: 'Отравление Скрипалей' },
            { link: '#', title: 'Кокорин и Мамаев' },
            { link: '#', title: 'Пенсионная реформа' },
          ]} />
        </Col>
        <Col xs={12} className="size-14 mb-2">
          <Links title="О НАС" titleClass="mb-4 menu-links-title" itemsClass="menu-mobile-links-item" items={[
            { link: '#', title: 'Контакты' },
            { link: '#', title: 'Редакция' },
            { link: '#', title: 'Реклама' },
          ]} />
        </Col>
        <Col xs={12} className="mb-2"><hr className="separator without-margins" /></Col>
        <Col xs={12}>
          <div className="menu-find d-flex flex-column">
            <p className="menu-find-title mb-2">Поиск по сайту</p>
            <Find className="py-4" onSearch={onSearch} />
          </div>
        </Col>
        <Col xs={12} className="mt-2"><hr className="separator without-margins" /></Col>
        <Col xs={12}>
          <SocialIcons />
        </Col>
        <Col xs={12} className="mb-2"><hr className="separator without-margins" /></Col>
        <Col xs={12}><Subscribe /></Col>
        <Col xs={12} className="my-2"><hr className="separator without-margins" /></Col>
        <Col xs={12}><InfoText /></Col>
      </Row>
    </div>
  );
}