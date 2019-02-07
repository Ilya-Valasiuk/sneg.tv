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
} from './../../../img/news';

import { NewsItem } from './../news-item/news-item';
import { NewsSimpleItem } from './../news-simple-item/news-simple-item';
import { More } from './../more';

import './../news-block.scss';

const type = 'Знания';

export function KnowledgeSection({ }) {
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
            previewText="Футболист «Зенита» Александр Кокорин не пришел в полицию в указанный срок — до 18:00. Ранее МВД обещало объявить футболиста в федеральный розыск"
            text="Рассказ судьи о приговорах, коллегах и тайнах российского правосудия"
            type={type}
            date="10 октября 2018 18:16"
            large
          />
        </Col>
        <Col className="news-item-line-wrapper">
          <Row noGutters>
            <Col className="editor-choise py-2 py-lg-3 px-3 px-lg-4">
              <Row>
                <Col>
                  <p className="editor-choise-title font-weight-900 pt-3">Выбор редакции</p>
                </Col>
              </Row>
              <NewsSimpleItem
                previewText="Фотограф заставил тысячи людей смотреть на углы. И им это нравится"
                type={type}
                date="10 октября 2018 18:16"
              />
              <hr />
              <NewsSimpleItem
                previewText="Лукашенко назвал смешной возможность вступления Белоруссии в Россию"
                type={type}
                date="10 октября 2018 18:16"
              />
              <hr />
              <NewsSimpleItem
                previewText="Власти Британии заморозили активы жены отбывающего срок банкира из СНГ"
                type={type}
                date="10 октября 2018 18:16"
              />
            </Col>
          </Row>
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
        <Col className="pt-3">
          <More title="Больше знаний" className="font-weight-bold" />
        </Col>
      </Row>
    </Container>
  );
}
