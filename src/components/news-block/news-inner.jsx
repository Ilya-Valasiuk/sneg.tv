import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { NewsDateType } from './news-date-type';

export function NewsInner({
  date,
  type,
  typeLink,
  title,
  previewText,
  articleImg,
  imgSignature,
  articleText,
  authorName,
  authorTitle,
  tags
}) {
  return (
    <div className="news-inner">
      <NewsDateType date={date} type={type} typeLink={typeLink} className="pl-0" />
      <h2 className="news-inner-title font-weight-900">{title}</h2>
      <p className="news-inner-text font-italic">{previewText}</p>
      <div className="news-inner-img mb-2">
        <img src={articleImg} className="mb-1" title="Article img" alt="Articlel img" />
        <span className="news-inner-img-signature size-14">{imgSignature}</span>
      </div>
      <div className="news-inner-text" dangerouslySetInnerHTML={{ __html: articleText }}></div>
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
    </div>
  );
}