import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ArticleBadge } from 'components/article-badge/article-badge';

import './author-article.scss';

export function AuthorArticle(props) {
  const { authorPhoto, authorName, authorTitle, authorInfo, link, isWidget } = props;
  return (
    <div className={classnames('author-article mb-2', { 'author-article-widget': isWidget })}>
      <div className="author-article-wrapper">
        <Row className="mb-2">
          <Col xs={6} md="auto">
            <img className="author-article-img img-fluid" src={authorPhoto} alt="authorPhoto" />
          </Col>
          <Col xs={6} md="" className="pl-0">
            <Row>
              <Col xs={12} md={6}>
                <p className="author-article-name mb-0">{authorName}</p>
              </Col>
              <Col xs={12} md={6}>
                <ArticleBadge title="Авторская колонка" />
              </Col>
            </Row>
            <p className="author-article-title mb-2">{authorTitle}</p>
            <div className="d-none d-md-block">
              <p className="author-article-info">{authorInfo}</p>
              {isWidget && <Link className="author-article-link" to={link}>Все статьи автора »</Link>}
            </div>
            {!isWidget &&
              <div className="author-article-socials">
                <a href="#" className="author-article-socials-item justify-content-center mr-3">
                  <i className="fab fa-vk" />
                </a>
                <a href="#" className="author-article-socials-item justify-content-center mr-3">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="author-article-socials-item justify-content-center mr-3">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            }
          </Col>
        </Row>
        <div className="d-md-none">
          <p className="author-article-info">{authorInfo}</p>
          {isWidget && <Link className="author-article-link" to={link}>Все статьи автора »</Link>}
        </div>
      </div>
    </div>
  );
}

AuthorArticle.defaultProps = {
  link: '#',
}