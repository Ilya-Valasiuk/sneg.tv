import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  largeBlockImg,
  newsImg1,
} from './../../../img/news';
import { More } from './../../shared/more/more';
import { NewsInner } from './../news/news-inner';

import { AdBanner } from './../../ad-banner/ad-baner';
import { NewsItem } from './../news-item/news-item';

import './../news-block.scss';

const type = 'Знания';

export function News({ isTabletSm }) {
  return (
    <Container className="py-3 news-block padding-x-20">
      <Row noGutters className="mb-3">
        <Col xs={isTabletSm ? 12 : 'auto'} className="news-item-line-wrapper-large mr-15 scroll-element">
          <NewsInner
            date="10 октября 2018 18:16"
            type={type}
            typeLink="/test"
            title="Кокорин не пришёл в полицию до истечение дедлайна МВД"
            previewText="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию."
            imgSrc={largeBlockImg}
            imgSignature="тест"
            articleText="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. </br> Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. </br></br> Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию."
            authorName="Анна Лаврова"
            authorTitle="собственный корреспондент"
            tags="«Зенит», Александр Кокорин, Павел Мамаев"
            isCollapsed
            isSeparatorHidden
          />
        </Col>
        {
          !isTabletSm &&
          <Col className="news-item-line-wrapper sticky-right-col pt-2">
            <div className="sticky-right-col">
              <Row className="align-items-center">
                <Col xs='auto'>
                  <p className="editor-choise-title font-weight-900 pt-2">Популярное</p>
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
            </div>
          </Col>
        }
      </Row>

      <Row noGutters>
        <Col xs='auto' className="news-item-line-wrapper-large mr-15"><hr /></Col>
      </Row>

      <Row noGutters>
        <Col xs={isTabletSm ? 12 : 'auto'} className="news-item-line-wrapper-large mr-15 scroll-element">
          <NewsInner
            date="10 октября 2018 18:16"
            type={type}
            typeLink="/test"
            title="Кокорин не пришёл в полицию до истечение дедлайна МВД 1111"
            previewText="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию."
            imgSrc={largeBlockImg}
            imgSignature="тест"
            articleText="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. </br> Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. </br></br> Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию."
            authorName="Анна Лаврова"
            authorTitle="собственный корреспондент"
            tags="«Зенит», Александр Кокорин, Павел Мамаев"
            isCollapsed
            isSeparatorHidden
          />
        </Col>
        {
          !isTabletSm &&
          <Col className="news-item-line-wrapper sticky-right-col pt-2">
            <div className="sticky-right-col">
              <Row noGutters>
                <Col className="px-0 pb-4 text-center">
                  <AdBanner bannerType="primeVideo" />
                </Col>
              </Row>
            </div>
          </Col>
        }
      </Row>

      <Row noGutters>
        <Col xs='auto' className="news-item-line-wrapper-large mr-15"><hr /></Col>
      </Row>

      <Row noGutters>
        <Col xs={isTabletSm ? 12 : 'auto'} className="news-item-line-wrapper-large mr-15 scroll-element">
          <NewsInner
            date="10 октября 2018 18:16"
            type={type}
            typeLink="/test"
            title="Кокорин не пришёл в полицию до истечение дедлайна МВД 2222"
            previewText="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию."
            imgSrc={largeBlockImg}
            imgSignature="тест"
            articleText="Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. </br> Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. </br></br> Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию. Глава Конституционного суда Валерий Зорькин выступил с программной статьей «Буква и дух Конституции» в «Российской газете». Он предложил реформировать политическую и правовую системы, внести изменения в Конституцию."
            authorName="Анна Лаврова"
            authorTitle="собственный корреспондент"
            tags="«Зенит», Александр Кокорин, Павел Мамаев"
            isCollapsed
            isSeparatorHidden
          />
        </Col>
        {
          !isTabletSm &&
          <Col className="news-item-line-wrapper sticky-right-col pt-2">
            <div className="sticky-right-col">
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
            </div>
          </Col>
        }
      </Row>
      <Row className="my-4" noGutters>
        <Col xs={isTabletSm ? 12 : 'auto'} className="news-item-line-wrapper-large mr-15">
          <More title="..." className="more-dots font-weight-bold" />
        </Col>
      </Row>
    </Container >
  );
}