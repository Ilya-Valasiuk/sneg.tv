import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { cloneDeep } from 'lodash';
import { NewsItem } from './../news-item/news-item';
import { More } from './../../shared/more/more';
import { NewsTestItemMobile } from '../news-test-item/news-test-item-mobile';
import {
  test1,
} from './../../../img/news';
import { STUB_DATA } from './stub-data';

import './../news-block.scss';

const type = "Эмоции";

export function EmotionSectionMobile() {
  const NEWS_DATA = cloneDeep(STUB_DATA);

  return (
    <Container className="py-3 news-block padding-x-20">
      <Row className="align-items-center mb-3">
        <Col xs="auto"><p className="title size-14 text-uppercase font-weight-900 mb-0">{type}</p></Col>
        <Col className="pl-0">
          <hr />
        </Col>
      </Row>

      <Row className="mb-2" noGutters>
        <Col xs={12} className="news-item-line-wrapper-large">
          <NewsItem
            {...NEWS_DATA[1]}
            large
          />
        </Col>
      </Row>
      <Row noGutters>
        <Col xs="auto" className="news-item-line-wrapper mr-2-percent">
          <NewsItem
            {...NEWS_DATA[2]}
            dateTypeClassName="flex-column-reverse"
          />
        </Col>
        <Col xs="auto" className="news-item-line-wrapper">
          <NewsItem
            {...NEWS_DATA[3]}
            dateTypeClassName="flex-column-reverse"
          />
        </Col>
        <Col xs="auto" className="news-item-line-wrapper mr-2-percent">
          <NewsItem
            {...NEWS_DATA[4]}
            dateTypeClassName="flex-column-reverse"
          />
        </Col>
        <Col xs="auto" className="news-item-line-wrapper">
          <NewsItem
            {...NEWS_DATA[5]}
            dateTypeClassName="flex-column-reverse"
          />
        </Col>
      </Row>
      <Row className="without-margins" noGutters>
        <Col className="news-item-line-wrapper">
          <NewsTestItemMobile
            imgSrc={test1}
            type={type}
            date="10 октября 2018 18:16"
            previewText="Тест по главным песням «Мумий Тролль»"
          />
        </Col>
      </Row>
      <Row>
        <Col className="pt-4">
          <More title="Больше эмоций" className="font-weight-bold" />
        </Col>
      </Row>
    </Container>
  );
}
