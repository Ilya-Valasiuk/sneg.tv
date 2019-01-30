import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { cloneDeep } from 'lodash';

import { NewsItem } from './../news-item/news-item';
import { NewsItemMain } from './../news-item-main/news-item-main';
import { NewsSimpleItem } from './../news-simple-item/news-simple-item';
import { More } from './../more';
import { STUB_DATA } from './stub-data'; 

import './../news-block.scss';


export function LifeSection({ isMobile }) {
  const NEWS_DATA = cloneDeep(STUB_DATA);

  return (
    <Container className="py-3 news-block">
      <Row className="align-items-center mb-2">
        <Col xs="auto"><p className="title size-14 text-uppercase font-weight-900 mb-0">Жизнь</p></Col>
        <Col className="pl-0">
          <hr />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs='auto' className="news-item-line-wrapper-large mr-15">
          <NewsItemMain
            {...NEWS_DATA[1]}
            large
          />
        </Col>
        <Col className="news-item-line-wrapper">
          <NewsSimpleItem
            previewText="СК рассказал об отказе убитого в Подмосковье следователя от госзащиты"
            type="Жизнь"
            date="10 октября 2018 18:16"
          />
          <hr />
          <NewsSimpleItem
            previewText="Лукашенко назвал смешной возможность вступления Белоруссии в Россию"
            type="Жизнь"
            date="10 октября 2018 18:16"
          />
          <hr />
          <NewsSimpleItem
            previewText="Власти Британии заморозили активы жены отбывающего срок банкира из СНГ"
            type="Жизнь"
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
            {...NEWS_DATA[2]}
          />
        </Col>
        <Col className="news-item-line-wrapper mr-15">
          <NewsItem
            {...NEWS_DATA[3]}
          />
        </Col>
        <Col className="news-item-line-wrapper">
          <NewsItem
            {...NEWS_DATA[4]}
          />
        </Col>
      </Row>
      <Row>
        <Col className="py-3"><hr /></Col>
      </Row>
      <Row noGutters>
        <Col className="news-item-line-wrapper mr-15">
          <NewsItem
            {...NEWS_DATA[5]}
          />
        </Col>
        <Col className="news-item-line-wrapper mr-15">
          <NewsItem
            {...NEWS_DATA[6]}
          />
        </Col>
        <Col className="news-item-line-wrapper">
          <NewsItem
            {...NEWS_DATA[7]}
          />
        </Col>
      </Row>
      <Row>
        <Col className="pt-3">
          <More title="Больше жизни" className="font-weight-bold" />
        </Col>
      </Row>
    </Container>
  );
}
