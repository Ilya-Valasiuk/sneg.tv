import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AdBanner } from './../ad-banner/ad-baner';
import { HeaderNewsSingle } from '../header-news/header-news-single';
import { NewsSimpleItem } from './../news-block/news-simple-item';

import './inner.scss';

const STUB_HEADER_TITLE = '«Зенит» попросил суд отпустить Кокорина из-под стражи';

export class Inner extends Component {

  render() {
    return (
      <Fragment>
        <HeaderNewsSingle text={STUB_HEADER_TITLE} />
        <Container className="py-3 news-block inner">
          <Row noGutters>
            <Col xs='auto' className="news-item-line-wrapper-large mr-15">
              {/* <NewsItem
                imgSrc={largeBlockImg}
                imgAlt="Кокорин"
                imgPlaceholder="Кокорин не пришёл в полицию до истечение дедлайна МВД"
                previewText="Футболист «Зенита» Александр Кокорин не пришел в полицию в указанный срок — до 18:00. Ранее МВД обещало объявить футболиста в федеральный розыск"
                type="Жизнь"
                date="10 октября 2018 18:16"
                large
              /> */}
              test
            </Col>
            <Col className="news-item-line-wrapper">
              <Row>
                <Col>
                  <p className="font-weight-900 pt-3 text-uppercase read-more-text mb-1 size-14">Читайте также</p>
                </Col>
              </Row>
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
              <Col className="px-0 pb-4 pt-3">
                <AdBanner bannerType="primeVideo" />
              </Col>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
