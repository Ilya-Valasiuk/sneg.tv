import React, { Fragment } from 'react';
import { HeaderNewsSingle } from '../header-news/header-news-single';
import { Inner } from './inner';

const STUB_HEADER_TITLE = '«Зенит» попросил суд отпустить Кокорина из-под стражи';

export function InnerWrapper({ }) {
  return (
    <Fragment>
      <HeaderNewsSingle text={STUB_HEADER_TITLE} />
      <Inner title={STUB_HEADER_TITLE} />
      <hr />
      <Inner title={STUB_HEADER_TITLE} />
    </Fragment>
  );
}