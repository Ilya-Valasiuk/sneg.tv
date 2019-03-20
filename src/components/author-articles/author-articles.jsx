import React from 'react';
import { Row, Col } from 'reactstrap';
import { AuthorArticle } from 'components/author-article/author-article';
import { SimpleArticle } from 'components/simple-article/simple-article';

import './author-articles.scss';

export function AuthorArticles(props) {
  const { data } = props;

  return (
    <div className="author-articles">
      <AuthorArticle {...data.author} />
      <hr />
      <Row>
        {data.articles.map((article, index) =>
          <Col xs={12} md={4} key={index}>
            <SimpleArticle id={article.id} {...article} />
            {data.articles.length - 1 !== index && <hr className="my-4 d-md-none" />}
          </Col>
        )}
      </Row>
    </div>
  );
}