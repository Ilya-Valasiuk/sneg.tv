import React, { Component, Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { ContentCollapse } from './../../shared/content-collapse/content-collapse';
import { NewsDateType } from './../news-date-type/news-date-type';
import { NewsSimpleItem } from '../news-simple-item/news-simple-item';
import { AdPlaceholder } from './../../shared/ad-placeholder/ad-placeholder';
import { ArticlePoll } from '../../shared/article-poll/article-poll';

import './news-inner.scss';

export class NewsInnerMobile extends Component {

  getContent() {
    const {
      articleText,
      authorName,
      authorTitle,
      tags,
      isSeparatorHidden,
      showIframe,
      onToggleCommentsPopup,
    } = this.props;

    return (
      <Fragment>
        <div className="news-inner-text" dangerouslySetInnerHTML={{ __html: articleText }}></div>
        <div className="py-4">
          <Row>
            <Col>
              <p className="font-weight-900 pt-3 text-uppercase read-more-text mb-1 size-14">Читайте также</p>
            </Col>
          </Row>
          <div>
            <NewsSimpleItem
              previewText="СК рассказал об отказе убитого в Подмосковье следователя от госзащиты"
              type="Жизнь"
              date="10 октября 2018 18:16"
              className="mobile-large"
            />
            <hr />
            <NewsSimpleItem
              previewText="Лукашенко назвал смешной возможность вступления Белоруссии в Россию"
              type="Жизнь"
              date="10 октября 2018 18:16"
              className="mobile-large"
            />
            <hr />
          </div>
        </div>
        {showIframe && <div className="py-3 without-margins">
          <div className="news-iframe  text-center">
            <iframe id="ytplayer" type="text/html" class="video"
              src="https://www.youtube.com/embed/RMxsaTWOVhw?autoplay=0&origin=https://www.youtube.com/watch?v=RMxsaTWOVhw"
              frameborder="0" />
          </div>
        </div>
        }
        <ArticlePoll />
        <h2 className="subtitle">Подзаголовок</h2>
        <p className="font-weight-bold">жирный текс</p>
        <p className="font-italic">курсив</p>
        <ul>
          <li>тест</li>
          <li>тест2</li>
          <li>тест3</li>
        </ul>
        <blockquote>Пресс-служба МВД Кабардино-Балкарии подтверждает факт нападения на&nbsp;экипаж ДПС в&nbsp;составе трех человек, один из&nbsp;сотрудников получил ножевое ранение. Работает оперативно-следственная группа,<cite>&nbsp;— заявили в&nbsp;ведомстве. </cite>
        </blockquote>
        <hr className="my-4" />
        <div className="news-inner-caption mb-4">
          <Row noGutters className="align-items-center">
            <Col xs='auto' className="text-uppercase news-inner-caption-header">автор</Col>
            <Col className="ml-3 news-inner-caption-text"><span className="styled">{authorName}</span>, {authorTitle}</Col>
          </Row>
        </div>
        <Row noGutters>
          <Button className="comments-btn w-100" outline onClick={onToggleCommentsPopup}>Обсудить</Button>
        </Row>
        <AdPlaceholder />
      </Fragment>
    );
  }

  render() {
    const {
      date,
      type,
      typeLink,
      title,
      previewText,
      imgSrc,
      imgSignature,
      isCollapsed,
      onExpand
    } = this.props;
    return (
      <div className="news-inner">
        <NewsDateType date={date} type={type} typeLink={typeLink} className="pl-0 align-items-center" />
        <h1 className="news-inner-title font-weight-900">{title}</h1>
        <p className="news-inner-text font-italic">{previewText}</p>
        <div className="news-inner-img without-margins">
          <img src={imgSrc} className="mb-1 w-100" title="Article img" alt="Articlel img" />
        </div>
        <div className="news-inner-img-signature size-14 mb-2 ">{imgSignature}</div>

        {
          isCollapsed ?
            <ContentCollapse
              minHeight="190px"
              textClosed="Продолжить чтение"
              textOpen="Свернуть"
              btnClasses="ml-2 mt-2 mb-3"
              onToggle={onExpand}
            >{this.getContent()}
            </ContentCollapse> :
            <Fragment>
              {this.getContent()}
            </Fragment>
        }
      </div>
    );
  }
}