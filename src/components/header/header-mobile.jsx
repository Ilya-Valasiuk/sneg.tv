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
      <Route exact path="/contacts" render={props => (
        <InnerHeaderMobile {...headerProps} />
      )} />
      <Route exact path="/editors" render={props => (
        <InnerHeaderMobile {...headerProps} />
      )} />
      <Route exact path="/commercial" render={props => (
        <InnerHeaderMobile {...headerProps} />
      )} />
      <Route exact path="/author-articles" render={props => (
        <InnerHeaderMobile {...headerProps} />
      )} />
      <Route exact path="/search" render={props => (
        <InnerHeaderMobile {...headerProps} />
      )} />
      <Route exact path="/profile" render={props => (
        <InnerHeaderMobile {...headerProps} />
      )} />
    </Fragment>
  );
}