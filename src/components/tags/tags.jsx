import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { Element, scroller } from 'react-scroll';

import { STUB_DATA } from './stub-data';

import './tags.scss';

const scrollToElement = (to) => {
  scroller.scrollTo(to, {
    containerId: 'snow-col-main',
    smooth: true,
    offset: document.body.querySelector(`[name=${to}]`).getBoundingClientRect().top - 51 // workaround for react-scroll
  })
}

const getLetters = lettersMap => lettersMap.map(({ name, values }) => (
  <Col
    key={name}
    className={classnames('tags-letter', {
      'tags-letter-disabled': values.length === 0
    })}
    onClick={() => scrollToElement(name)}
  >
    {name}
  </Col>
));

const getLettersValues = lettersMap => lettersMap.map(({ name, values }) => (
  <Fragment>
    {values.length ?
      <Col xs={12} className="mb-4" >
        <Element name={name}>
          <Row>
            <Col xs={12} className="tags-letter-name mb-2">{name}</Col>
            {values.map(value => (
              <Col
                key={value.name}
                xs={6}
                md={3}
                className="tags-letter-value mb-2"
                tag={'a'}
                href={value.link || '#'}
              >
                {value.name}
              </Col >
            ))}
          </Row>
        </Element>
      </Col> : null}
  </Fragment>
));

export function Tags() {
  return (
    <div className="tags">
      <div className="mb-5">
        <Row className="mb-2">
          {getLetters(STUB_DATA.lettersMapRus)}
        </Row>
        <Row>
          {getLetters(STUB_DATA.lettersMapEng)}
        </Row>
      </div>
      <Row>
        {getLettersValues(STUB_DATA.lettersMapRus)}
      </Row>
      <Row>
        {getLettersValues(STUB_DATA.lettersMapEng)}
      </Row>
    </div>
  );
}