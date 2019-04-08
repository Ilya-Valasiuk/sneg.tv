import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CloseIcon } from 'components/icons/close';
import { SimpleArticle } from 'components/simple-article/simple-article';

import './more-unit-popup.scss';

const array_chunks = (array, chunk_size) => Array(Math.ceil(array.length / chunk_size)).fill().map((_, index) => index * chunk_size).map(begin => array.slice(begin, begin + chunk_size))

export function MoreUnitPopup({ title, articles, onMoreUnitToggle }) {
  const chunkArticles = array_chunks(articles, 3);
  return (
    <Container className="more-unit-popup">
      <Row className="more-unit-popup-title mb-0 align-items-center align-items-md-end" noGutters>
        <Col xs={12} className="d-flex justify-content-between align-items-center">
          <span>{title}</span>
          <span className="close" onClick={onMoreUnitToggle}><CloseIcon /></span>
        </Col>
        <Col xs={12} className="d-none d-md-block more-unit-popup-separator"><hr className="m-0" /></Col>
      </Row>
      <Row className="more-unit-popup-scoller py-2 py-md-5">
        <Col xs={12}>
          {chunkArticles.map(articlesRow =>
            <Fragment>
              <Row>
                {articlesRow.map((unit, index) =>
                  <Col xs={12} md={4} key={index}>
                    <SimpleArticle id={unit.id} {...unit} />
                    {articles.length - 1 !== index && <hr className="my-4 d-md-none" />}
                  </Col>
                )}
              </Row>
              <Row className="d-none d-md-flex">
                <Col md={12}><hr className="mb-4 mt-3" /></Col>
              </Row>
            </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  )
}