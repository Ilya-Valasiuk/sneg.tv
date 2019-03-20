import React from 'react';
import { Row, Col } from 'reactstrap';
import { SimpleArticle } from 'components/simple-article/simple-article';

import './profile-favorites.scss';

export function ProfileFavorites({ data }) {
  return (
    <div className="profile-favorites">
      <Row className="profile-favorites-header align-items-center mb-3">
        <Col xs="12" md="auto">избранные статьи</Col>
        <Col className="d-none d-md-block"><hr /></Col>
      </Row>
      <Row>
        {data.map((favoriteArticle, index) =>
          <Col xs={12} md={4} key={index}>
            <SimpleArticle id={favoriteArticle.id} {...favoriteArticle} isPinned />
            {data.length - 1 !== index && <hr className="my-4 d-md-none" />}
          </Col>
        )}
      </Row>
    </div>
  );
}