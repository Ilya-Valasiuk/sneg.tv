import React, { Component, Fragment } from "react";
import classnames from "classnames";
import { Container, Row, Col } from "reactstrap";
import { AuthorArticle } from 'components/author-article/author-article';
import { Gallery } from 'components/gallery/gallery';
import { AdBanner } from "./../ad-banner/ad-baner";
import { NewsSimpleItem } from "./../news-block/news-simple-item/news-simple-item";
import { NewsItemPartner } from "./../news-block/news-item-partner";
import { NewsInner } from "./../news-block/news/news-inner";

import "./inner.scss";

export class Inner extends Component {
  state = {
    isCollapsed: this.props.isCollapsed
  };

  onExpand = () => {
    this.setState({ isCollapsed: false });
  };

  render() {
    const {
      data,
      partnerData,
      showIframe,
      onToggleCommentsPopup,
      emptyComments,
      articleData,
      showAuthorArticle,
    } = this.props;
    const {
      title,
      type,
      date,
      typeLink,
      previewText,
      imgSignature,
      articleText,
      authorName,
      authorTitle,
      tags,
      imgSrc,
    } = data;
    const { isCollapsed } = this.state;

    return (
      <Fragment>
        <Container className="py-3 news-block scroll-element inner">
          <Row noGutters>
            <Col
              xs={12}
              lg="auto"
              className="news-item-line-wrapper-large mr-15"
            >
              {showAuthorArticle && <AuthorArticle {...articleData} isWidget />}
              <NewsInner
                date={date}
                type={type}
                typeLink={typeLink}
                title={title}
                previewText={previewText}
                imgSrc={imgSrc}
                imgSignature={imgSignature}
                articleText={articleText}
                authorName={authorName}
                authorTitle={authorTitle}
                tags={tags}
                isCollapsed={isCollapsed}
                onExpand={this.onExpand}
                showIframe={showIframe}
                onToggleCommentsPopup={onToggleCommentsPopup}
                emptyComments={emptyComments}
              />
              <Gallery />
              <Row>
                <Col
                  xs={12}
                  className="partner-title size-14 font-weight-900 text-uppercase"
                >
                  <p className="mb-4">новости партнёров</p>
                </Col>
                <Col xs={6}>
                  <NewsItemPartner {...partnerData[0]} />
                </Col>
                <Col xs={6}>
                  <NewsItemPartner {...partnerData[1]} />
                </Col>
              </Row>
            </Col>
            <Col className="news-item-line-wrapper sticky-right-col d-none d-lg-block">
              <div
                className={classnames({
                  "sticky-right-col-special-h": !isCollapsed,
                  "h-100": isCollapsed
                })}
              >
                <div className="sticky-right-col">
                  <Col className="px-0 pb-4 pt-3 text-center">
                    <AdBanner bannerType="primeVideo" />
                  </Col>
                </div>
              </div>
              <div className="sticky-right-col">
                {!isCollapsed && (
                  <Fragment>
                    <hr />
                    <Row>
                      <Col>
                        <p className="font-weight-900 pt-3 text-uppercase read-more-text mb-1 size-14">
                          Читайте также
                        </p>
                      </Col>
                    </Row>
                    <div>
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
                  </Fragment>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
