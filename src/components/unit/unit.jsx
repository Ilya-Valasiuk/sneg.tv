import React from 'react';
import { Row, Col } from 'reactstrap';
import { SimpleArticle } from 'components/simple-article/simple-article';

import './unit.scss';

export function Unit({ title, description, articles }) {
  return (
    <div className="unit">
      <h1 className="unit-title mb-3">{title}</h1>
      <p className="unit-description">{description}</p>
      <hr className="my-4" />
      <Row>
        {articles.map((article, index) =>
          <Col xs={12} md={4} key={index}>
            <SimpleArticle id={article.id} {...article} />
            {articles.length - 1 !== index && <hr className="my-4 d-md-none" />}
          </Col>
        )}
      </Row>
    </div>
  );
}