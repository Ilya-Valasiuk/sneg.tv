import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NewsSimpleItem } from './news-simple-item';

export function TestBlock({ imgSrc, imgAlt, date, type, typeLink, previewText, handler }) {
  return (
    <Row noGutters className="news-item">
      <Col xs={12}>
        <img className="img-fluid" src={imgSrc} alt={imgAlt} />
      </Col>
      <Col className="px-3 bg-light" xs={12}>
        <NewsSimpleItem
          date={date}
          type={type}
          typeLink={typeLink}
          link={null}
          previewText={previewText}
        />
        <div className="text-center py-3">
          <Button className="test-btn pt-2" color="primary">Начать тест</Button>
        </div>
      </Col>
    </Row>
  );
}