import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AdBanner } from './../ad-banner/ad-baner';
import { NewsSimpleItem } from './../news-block/news-simple-item';
import { NewsItemPartner } from './../news-block/news-item-partner';
import { NewsInner } from './../news-block/news-inner';
import { NewsComments } from './../news-block/news-comments';
import {
  newsImg1,
  newsImg2,
  newsImg3,
  inner as innerImg,
} from './../../img/news';

import './inner.scss';

const STUB_HEADER_TITLE = '«Зенит» попросил суд отпустить Кокорина из-под стражи';
const type = 'Знания';
const date = '10 октября 2018, 18:16';
const typeLink = '#';
const previewText = 'ФК «Зенит» обратился в суд с просьбой изменить меру пресечения для футболиста Александра Кокорина, арестованного после избиения чиновника Минпромторга';
const imgSignature = 'Рассмотрение апелляции на арест Александра Кокорина (Фото: Владимир Астапкович / РИА Новости)';
const articleText = `Футбольный клуб «Зенит» попросил суд изменить меру пресечения для футболиста Александра Кокорина. Об этом во время заседания сообщила судья, передает «Интерфакс». <br><br>
«В адрес Московского городского суда поступило письмо за подписью президента футбольного клуба «Зенит» Сергея Фурсенко с просьбой изменить меру пресечения», — сказала судья.По ее словам, клуб попросил изменить меру пресечения для Кокорина на не связанную с содержанием под стражей.<br><br>
Кроме того, по словам судьи, клуб представил суду характеристику на Кокорина, в которой говорится, что такое поведение ему не свойственно.<br><br>
Судья отметила, что согласно процессуальному кодексу президент футбольного клуба не относится к числу тех, кто имеет право заявлять ходатайства.«Но мнение и характеристика будут учтены», — добавила она. <br><br>
О том, что в клубе рассчитывают на возвращение футболиста, заявил также главный тренер «Зенита» Сергей Семак.«Не рассчитывали, а рассчитываем[на возвращение Кокорина]», — сказал он, отвечая на вопрос, заданный журналистами во время пресс - конференции перед игрой «Зенита» с «Динамо».<br><br>
Семак также отметил, что «ошибки бывают у всех» и за них придется нести наказание, «в том числе и со стороны клуба».Он выразил надежду, что наказание, которому подвергнется Кокорин, будет соразмерным проступку.<br><br>
Суд арестовал нападающего «Зенита» Александра Кокорина, его брата Кирилла и футболиста «Краснодара» Павла Мамаева 11 октября.В отношении них возбуждены уголовные дела по ст. 116 УК РФ(побои) и ч. 2 ст. 213 УК РФ(хулиганство организованной группой).<br><br>
Обвинения футболистам были предъявлены, после того как вместе с компанией других молодых людей они совершили <span class="styled">нападение</span> на директора департамента Минпромторга Дениса Пака и руководителя НАМИ Сергея Гайсина в кафе в центре Москвы, а также <span class="styled">избили</span> водителя ведущей «Первого канала» Ольги Ушаковой.<br><br>
Кокорин и Мамаев находятся в московском СИЗО «Бутырка».Оба подали прошение об изменении меры пресечения на домашний арест, Мамаеву суд в этом уже <span class="styled">отказал</span>.`;
const authorName = 'Анна Лаврова';
const authorTitle = 'собственный корреспондент';
const tags = '«Зенит», Александр Кокорин, Павел Мамаев';

export class Inner extends Component {
  render() {
    const { title } = this.props;
    return (
      <Fragment>
        <Container className="py-3 news-block inner">
          <Row noGutters>
            <Col xs='auto' className="news-item-line-wrapper-large mr-15">
              <NewsInner
                date={date}
                type={type}
                typeLink={typeLink}
                title={title}
                previewText={previewText}
                articleImg={innerImg}
                imgSignature={imgSignature}
                articleText={articleText}
                authorName={authorName}
                authorTitle={authorTitle}
                tags={tags}
              />
              <Row noGutters>
                <Col xs={12}><hr className="my-4" /></Col>
                <NewsComments />
                <Col xs={12}><hr className="my-4" /></Col>
              </Row>
              <Row noGutters>
                <Col xs={12} className="partner-title size-14 font-weight-900 text-uppercase"><p className="mb-4">новости партнёров</p></Col>
                <Col xs="auto" className="news-item-line-wrapper mr-15">
                  <NewsItemPartner
                    imgSrc={newsImg1}
                    imgAlt="newsImg1"
                    previewText="Глава КС предложил политическую и правовую реформы. Главное"
                    type="Жизнь"
                    date="10 октября 2018 18:16"
                    partnerName="rbc.ru"
                  />
                </Col>
                <Col xs="auto" className="news-item-line-wrapper">
                  <NewsItemPartner
                    imgSrc={newsImg2}
                    imgAlt="newsImg2"
                    previewText="Реновация для пожилых: как Сбербанк хочет развивать дома престарелых"
                    type="Жизнь"
                    date="10 октября 2018 18:16"
                    partnerName="rbc.ru"
                  />
                </Col>
              </Row>
            </Col>
            <Col className="news-item-line-wrapper sticky-right-col">
              <div className="sticky-right-col">
                <Col className="px-0 pb-4 pt-3 text-center">
                  <AdBanner bannerType="primeVideo" />
                </Col>
                <hr />
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
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
