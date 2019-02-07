import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { ContentCollapse } from './../../shared/content-collapse/content-collapse';
import { NewsComments } from './../../news-block/news-comments/news-comments';
import { NewsDateType } from './../news-date-type/news-date-type';

import './news-inner.scss';

export class NewsInner extends Component {
  getContent() {
    const {
      articleText,
      authorName,
      authorTitle,
      tags,
      isSeparatorHidden,
      showIframe,
    } = this.props;

    return (
      <Fragment>
        <div className="news-inner-text" dangerouslySetInnerHTML={{ __html: articleText }}></div>
        {showIframe && <div className="py-3">
          <div className="news-iframe  text-center">
            <iframe id="ytplayer" type="text/html" class="video"
              src="https://www.youtube.com/embed/RMxsaTWOVhw?autoplay=0&origin=https://www.youtube.com/watch?v=RMxsaTWOVhw"
              frameborder="0" />
          </div>
        </div>
        }
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
        <div className="news-inner-caption">
          <Row noGutters className="mb-1 align-items-center">
            <Col xs='auto' className="text-uppercase news-inner-caption-header">автор</Col>
            <Col className="ml-3 news-inner-caption-text"><span className="styled">{authorName}</span>, {authorTitle}</Col>
          </Row>
          <Row noGutters className="align-items-center">
            <Col xs='auto' className="text-uppercase news-inner-caption-header">тэги</Col>
            <Col className="ml-3 news-inner-caption-text">{tags}</Col>
          </Row>
        </div>
        <Row noGutters>
          <Col xs={12}><hr className="my-4" /></Col>
          <NewsComments />
          {!isSeparatorHidden && <Col xs={12}><hr className="my-4" /></Col>}
        </Row>
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
        <div className="news-inner-img mb-2">
          <img src={imgSrc} className="mb-1 w-100" title="Article img" alt="Articlel img" />
          <span className="news-inner-img-signature size-14">{imgSignature}</span>
        </div>
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