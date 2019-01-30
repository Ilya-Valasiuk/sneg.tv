import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { NewsDateType } from './../news-date-type/news-date-type';

import './news-simple-item.scss';

export function NewsSimpleItem({ date, type, text, typeLink, previewText, link, className, dateTypeClassName }) {
  return (
    <Row className={classnames('news-simple-item', className)}>
      <NewsDateType date={date} type={type} typeLink={typeLink} className={dateTypeClassName} />
      <Col xs={12}>
        {
          link ?
            <a className="link" href={link} >
              {previewText && <p className={`preview-text font-weight-900 ${text ? 'mb-2' : ''}`}>{previewText}</p>}
              {text && <p className="article-text mb-0" dangerouslySetInnerHTML={{__html: text}}></p>}
            </a> :
            <Fragment>
            { previewText && <p className="preview-text mb-0">{previewText}</p> }
            {text && <p className="article-text mb-0" dangerouslySetInnerHTML={{__html: text}}></p>}
            </Fragment>
        }
      </Col>
    </Row >
  );
}

NewsSimpleItem.defaultProps = {
  link: '#',
  typeLink: '#',
  className: '',
};
