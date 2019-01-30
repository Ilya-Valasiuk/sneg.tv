import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { NewsSimpleItem } from './../news-simple-item/news-simple-item';

import './news-test-item.scss';

export function NewsTestItemMobile({ imgSrc, imgAlt, date, type, typeLink, previewText, handler }) {
  return (
    <div className="news-test-item news-test-item-mobile w-100" style={{backgroundImage: `url(${imgSrc})`}}>
      {/* <img src={imgSrc} className="w-100" alt={imgAlt} /> */}
      <div className="image-overlay"></div>
      <div className="placeholder-text">
        <p className="mb-1 text-uppercase"><span className="date">{date}</span> <span className="type">{type}</span></p>
        <p className="title-text font-weight-900 mb-0">{previewText}</p>
        <div className="text-center py-3">
          <Button className="test-btn pt-2 w-100" color="primary">Начать тест</Button>
        </div>
      </div>
    </div>
  );
}