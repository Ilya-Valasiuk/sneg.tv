import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { Link as RouterLink } from "react-router-dom";
import { NewsSimpleItem } from './news-simple-item';
import { Link } from '../shared/link/link';

import './news-item.scss';

export function NewsItem({
  imgSrc,
  imgAlt,
  header,
  imgPlaceholder,
  previewText,
  type,
  typeLink,
  date,
  link,
  text,
  large,
  withoutLink
}) {
  return (
    <Row tag={withoutLink ? 'div' : RouterLink} to="/inner" className={classnames('flex-column news-item', { 'news-item-large': imgPlaceholder, 'no-link': withoutLink })}>
      {header &&
        <Col xs={12}><Link href={link}><p className="news-item-header font-weight-900">{header}</p></Link></Col>
      }
      <Col xs={12}>
        <div className={classnames('position-relative', { 'news-item-image': !large })}>
          <img src={imgSrc} alt={imgAlt} className={classnames('img-fluid', { 'w-100 min-h-100': !large })} />
          {imgPlaceholder && <span className="position-absolute font-weight-900 text-white placeholder">{imgPlaceholder}</span>}
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
