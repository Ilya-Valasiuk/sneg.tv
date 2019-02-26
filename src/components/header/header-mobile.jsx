import React, { Fragment } from 'react';
import { Route } from "react-router-dom";
import { HomeHeaderMobile } from './home-header-mobile';
import { InnerHeaderMobile } from './inner-header-mobile';

export function HeaderMobile(headerProps) {
  return (
    <Fragment>
      <Route exact path="/" render={props => (
        <HomeHeaderMobile {...headerProps} />
      )} />
      <Route exact path="/inner" render={props => (
        <InnerHeaderMobile {...headerProps} />
      )} />
      <Route exact path="/search" render={props => (
        <InnerHeaderMobile {...headerProps} />
      )} />
    </Fragment>
  );
}