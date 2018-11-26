import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  largeBlockImg,
  newsImg1,
} from './../../img/news';

import { AdBanner } from './../ad-banner/ad-baner';
import { NewsItem } from './news-item';
import { NewsSimpleItem } from './news-simple-item';

import './news-block.scss';

const type = 'Знания';

export function News({ }) {
  return (
    <Container className="py-3 news-block">
      <Row>
        <Col xs={8}>
          <Row>
            <Col xs={12}>
              <NewsItem
                imgSrc={largeBlockImg}
                imgAlt="Кокорин"
                header="Кокорин не пришёл в полицию до истечение дедлайна МВД"
                text="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию"
                type={type}
                date="10 октября 2018 18:16"
              />
            </Col>
            <Col xs={12} className="py-3"><hr /></Col>
            <Col xs={12}>
              <NewsItem
                imgSrc={largeBlockImg}
                imgAlt="Кокорин"
                header="Кокорин не пришёл в полицию до истечение дедлайна МВД"
                text="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию"
                type={type}
                date="10 октября 2018 18:16"
              />
            </Col>
            <Col xs={12} className="py-3"><hr /></Col>
            <Col xs={12}>
              <NewsItem
                imgSrc={largeBlockImg}
                imgAlt="Кокорин"
                header="Кокорин не пришёл в полицию до истечение дедлайна МВД"
                text="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию"
                type={type}
                date="10 октября 2018 18:16"
              />
            </Col>
          </Row>
        </Col>

        <Col xs={4}>
          <Row>
            <Col xs={12} className="">
              <Row className="align-items-center">
                <Col xs='auto'>
                  <p className="editor-choise-title pt-4">Лента новостей</p>
                </Col>
                <Col className="pl-0">
                  <hr />
                </Col>
              </Row>
              <NewsItem
                imgSrc={newsImg1}
                imgAlt="newsImg1"
                previewText="Глава КС предложил политическую и правовую реформы. Главное"
                type={type}
                date="10 октября 2018 18:16"
              />
              <hr />
              <NewsItem
                imgSrc={newsImg1}
                imgAlt="newsImg1"
                previewText="Глава КС предложил политическую и правовую реформы. Главное"
                type={type}
                date="10 октября 2018 18:16"
              />
              <Col className="px-0 pb-4">
                <AdBanner bannerType="primeVideo" />
              </Col>
              <NewsItem
                imgSrc={newsImg1}
                imgAlt="newsImg1"
                previewText="Глава КС предложил политическую и правовую реформы. Главное"
                type={type}
                date="10 октября 2018 18:16"
              />
              <hr />
              <NewsItem
                imgSrc={newsImg1}
                imgAlt="newsImg1"
                previewText="Глава КС предложил политическую и правовую реформы. Главное"
                type={type}
                date="10 октября 2018 18:16"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}