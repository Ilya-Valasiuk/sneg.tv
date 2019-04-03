import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Links } from './../shared/links/links';
import { MenuItem } from './menu-item';
import { More } from './../shared/more/more';

import './menu.scss'

export function Menu() {
  return (
    <div className="menu p-3">
      <Row className="py-5">
        <Col xs={8}>
          <Row className="flex-column">
            <Col xs={12} className="mb-2 size-14 menu-links-title">Темы дня</Col>
            <Col xs={12} className="mb-3">
              <MenuItem
                previewText="Кокорин не пришел в полицию до истечения дедлайна МВД"
                text="Футболист «Зенита» Александр Кокорин не пришел в полицию в указанный срок — до 18:00. Ранее МВД обещало объявить футболиста в федеральный розыск"
                type="Жизнь"
                date="10 октября 2018 18:16"
              />
              <hr className="separator" />
              <MenuItem
                previewText="Даже при Сталине так не судили!"
                type="Жизнь"
                date="10 октября 2018 18:16"
              />
              <hr className="separator" />
              <MenuItem
                previewText="Сила пчелы: как белорус поставил мед в крупнейшую сеть экомагазинов США"
                type="Жизнь"
                date="10 октября 2018 18:16"
              />
              <hr className="separator" />
              <MenuItem
                previewText="Глава КС предложил политическую и правовую реформы. Главное"
                type="Жизнь"
                date="10 октября 2018 18:16"
              />
            </Col>
            <Col xs={12}>
              <More title="Ещё" link="/tags" className="text-white px-3 py-1" />
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row>
            <Col xs={12} className="size-14 mb-5">
              <Links title="РАЗДЕЛЫ" titleClass="mb-4 menu-links-title" itemsClass="menu-links-item" items={[
                { link: '#', title: 'Жизнь' },
                { link: '#', title: 'Знания' },
                { link: '#', title: 'Эмоции' },
              ]} />
            </Col>
            <Col xs={12} className="size-14 mb-5">
              <Links title="РУБРИКИ" titleClass="mb-4 menu-links-title" itemsClass="menu-links-item" items={[
                { link: '#', title: 'Дедолларизация' },
                { link: '#', title: 'Отставки губернаторов' },
                { link: '#', title: 'Новые санкции США' },
                { link: '#', title: 'Отравление Скрипалей' },
                { link: '#', title: 'Кокорин и Мамаев' },
                { link: '#', title: 'Пенсионная реформа' },
              ]} />
              <Row>
                <Col xs="auto" className="pt-2">
                  <More title="Ещё" link="/rubrics" className="text-white px-3 py-1" />
                </Col>
              </Row>
            </Col>
            <Col xs={12} className="size-14 mb-5">
              <Links title="О НАС" titleClass="mb-4 menu-links-title" itemsClass="menu-links-item" items={[
                { link: '/contacts', title: 'Контакты' },
                { link: '/editors', title: 'Редакция' },
                { link: '/commercial', title: 'Реклама' },
              ]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}