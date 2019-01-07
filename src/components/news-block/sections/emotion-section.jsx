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

import './../news-block.scss';
import { TestBlock } from '../test-block';

const type = 'Эмоции';

export function EmotionSection({ }) {
  return (
    <Container className="py-3 news-block">
      <Row className="align-items-center mb-2">
        <Col xs="auto"><p className="title size-14 text-uppercase font-weight-900 mb-0">{type}</p></Col>
        <Col className="pl-0">
          <hr />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs='auto' className="news-item-line-wrapper-large mr-15">
          <NewsItem
            imgSrc={largeBlockImg}
            imgAlt="Кокорин"
            text="Основатель бренда Apiterra стал первым предпринимателем из славянских республик бывшего СССР, который поставил свой продукт влиятельной сети Whole Foods. Купить мед согласился и третий по величине ретейлер мира"
            previewText="Футболист «Зенита» Александр Кокорин не пришел в полицию в указанный срок — до 18:00. Ранее МВД обещало объявить футболиста в федеральный розыск"
            type={type}
            date="10 октября 2018 18:16"
            large
          />
        </Col>
        <Col className="news-item-line-wrapper">
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
      <Row noGutters>
        <Col className="news-item-line-wrapper mr-15">
          <NewsItem
            imgSrc={newsImg1}
            imgAlt="newsImg1"
            previewText="Глава КС предложил политическую и правовую реформы. Главное"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col className="news-item-line-wrapper mr-15">
          <NewsItem
            imgSrc={newsImg2}
            imgAlt="newsImg2"
            previewText="Реновация для пожилых: как Сбербанк хочет развивать дома престарелых"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col className="news-item-line-wrapper">
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
      <Row noGutters>
        <Col className="news-item-line-wrapper mr-15">
          <NewsItem
            imgSrc={newsImg4}
            imgAlt="newsImg4"
            previewText="Молодая россиянка спасла из горящего дома 12 человек"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col className="news-item-line-wrapper mr-15">
          <NewsItem
            imgSrc={newsImg5}
            imgAlt="newsImg5"
            previewText="На Кокорина и Мамаева завели уголовное дело"
            type={type}
            date="10 октября 2018 18:16"
          />
        </Col>
        <Col className="news-item-line-wrapper">
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
          <More title="Больше эмоций" className="font-weight-bold" />
        </Col>
      </Row>
    </Container>
  );
}
