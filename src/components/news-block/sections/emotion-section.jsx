import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  largeBlockImg,
  newsImg1,
  newsImg2,
  newsImg3,
  newsImg4,
  newsImg5,
  newsImg6,
  test1,
} from './../../../img/news';

import { NewsItem } from './../news-item';
import { More } from './../more';

import './../news-block.css';
import { TestBlock } from '../test-block';

const type = 'Эмоции';

export function EmotionSection({ }) {
  return (
    <Container className="py-3 news-block">
      <Row className="align-items-center">
        <Col xs="auto"><p className="title mb-0">{type}</p></Col>
        <Col className="pl-0">
          <hr />
        </Col>
      </Row>

      <Row>
        <Col xs={8}>
          <NewsItem
            imgSrc={largeBlockImg}
            imgAlt="Кокорин"
            imgPlaceholder="Кокорин не пришёл в полицию до истечение дедлайна МВД"
            previewText="Футболист «Зенита» Александр Кокорин не пришел в полицию в указанный срок — до 18:00. Ранее МВД обещало объявить футболиста в федеральный розыск"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col xs={4}>
          <TestBlock
            imgSrc={test1}
            type={type}
            date="10 октября 2018 18:16"
            previewText="Тест по главным песням «Мумий Тролль»"
          />
        </Col>
      </Row>
      <Row>
        <Col className="py-3"><hr /></Col>
      </Row>
      <Row>
        <Col xs={4}>
          <NewsItem
            imgSrc={newsImg1}
            imgAlt="newsImg1"
            previewText="Глава КС предложил политическую и правовую реформы. Главное"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col xs={4}>
          <NewsItem
            imgSrc={newsImg2}
            imgAlt="newsImg2"
            previewText="Реновация для пожилых: как Сбербанк хочет развивать дома престарелых"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col xs={4}>
          <NewsItem
            imgSrc={newsImg3}
            imgAlt="newsImg3"
            previewText="Новый плацдарм: что известно о переброске российских военных в Ливию"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
      </Row>
      <Row>
        <Col className="py-3"><hr /></Col>
      </Row>
      <Row>
        <Col xs={4}>
          <NewsItem
            imgSrc={newsImg4}
            imgAlt="newsImg4"
            previewText="Молодая россиянка спасла из горящего дома 12 человек"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col xs={4}>
          <NewsItem
            imgSrc={newsImg5}
            imgAlt="newsImg5"
            previewText="На Кокорина и Мамаева завели уголовное дело"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col xs={4}>
          <NewsItem
            imgSrc={newsImg6}
            imgAlt="newsImg6"
            previewText="Семен Слепаков – Песня о солсберецком шпиле"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
      </Row>
      <Row>
        <Col className="py-3">
          <More title="Больше эмоций" />
        </Col>
      </Row>
    </Container>
  );
}
