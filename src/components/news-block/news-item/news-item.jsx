import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { Link as RouterLink } from "react-router-dom";
import { NewsSimpleItem } from './../news-simple-item/news-simple-item';

import './news-item.scss';

export function NewsItem({
  imgSrc,
  imgAlt,
  previewText,
  type,
  typeLink,
  date,
  link,
  text,
  large,
  withoutLink,
  dateTypeClassName,
}) {
  return (
    <Row tag={withoutLink ? 'div' : RouterLink} to="/inner" className={classnames('flex-column news-item', { 'no-link': withoutLink })}>
      <Col xs={12}>
        <div className={classnames('position-relative', { 'news-item-image': !large })}>
          <img src={imgSrc} alt={imgAlt} className={classnames('img-fluid', { 'w-100 min-h-100': !large, 'news-item-image-large': large })} />
        </div>
      </Col>
      <Col xs={12}>
        <NewsSimpleItem
          type={type}
          typeLink={typeLink}
          date={date}
          link={link}
          previewText={previewText}
          text={text}
          dateTypeClassName={dateTypeClassName}
        />
      </Col>
    </Row>
  );
}

NewsItem.defaultProps = {
  link: '#',
  typeLink: '#',
  large: false,
  withoutLink: false,
};
