import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NewsInnerMobile } from './../news-block/news/news-inner-mobile';
import {
  inner as innerImg,
} from './../../img/news';

import './inner.scss';

export class InnerMobile extends Component {
  render() {
    const { data, showIframe, onToggleCommentsPopup, isCollapsed } = this.props;
    const { title, type, date, typeLink, previewText, imgSignature, articleText, authorName, authorTitle, tags, imgSrc } = data;

    return (
      <Fragment>
        <Container className="py-3 news-block padding-x-20 inner scroll-element">
          <Row noGutters>
            <Col xs={12} className="">
              <NewsInnerMobile
                date={date}
                type={type}
                typeLink={typeLink}
                title={title}
                previewText={previewText}
                imgSrc={innerImg}
                imgSignature={imgSignature}
                articleText={articleText}
                authorName={authorName}
                authorTitle={authorTitle}
                tags={tags}
                isCollapsed={isCollapsed}
                onExpand={this.onExpand}
                showIframe={showIframe}
                onToggleCommentsPopup={onToggleCommentsPopup}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
