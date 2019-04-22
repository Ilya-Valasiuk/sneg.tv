import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  largeBlockImg,
  newsImg1,
} from './../../../img/news';
import { More } from './../../shared/more/more';
import { NewsInnerMobile } from './../news/news-inner-mobile';

import { AdBanner } from './../../ad-banner/ad-baner';
import { NewsItem } from './../news-item/news-item';

import './../news-block.scss';

const type = 'Знания';

export function NewsMobile({ }) {
  return (
    <Container className="py-3 news-block padding-x-20">
      <Row noGutters>
        <Col>
          <NewsInnerMobile
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
       </Row>

      <Row noGutters>
        <Col xs={12}><hr /></Col>
      </Row>

      <Row noGutters>
        <Col>
          <NewsInnerMobile
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
      </Row>

      <Row noGutters>
        <Col xs={12}><hr /></Col>
      </Row>

      <Row noGutters>
        <Col>
          <NewsInnerMobile
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
      </Row>
      <Row className="my-4" noGutters>
        <Col>
          <More title="..." className="more-dots font-weight-bold" />
        </Col>
      </Row>
    </Container >
  );
}