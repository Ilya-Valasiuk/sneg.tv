import React, { Component, Fragment } from 'react';
import { ContentCollapse } from './../../shared/content-collapse/content-collapse';
import { NewsDateType } from './../news-date-type/news-date-type';

import './news-home-mobile.scss';

export class NewsHomeMobile extends Component {
  getContent() {
    const {
      articleText,
    } = this.props;

    return (
      <Fragment>
        <div className="news-home-mobile-text" dangerouslySetInnerHTML={{ __html: articleText }}></div>
      </Fragment>
    );
  }

  render() {
    const {
      date,
      type,
      typeLink,
      title,
      previewText,
      imgSrc,
      imgSignature,
      isCollapsed,
      onExpand
    } = this.props;
    return (
      <div className="news-home-mobile">
        <h3 className="news-home-mobile-title font-weight-900">{title}</h3>
        <div className="news-inner-img">
          <img src={imgSrc} className="mb-1 w-100" title="Article img" alt="Articlel img" />
          <NewsDateType date={date} type={type} typeLink={typeLink} className="pl-0 align-items-center" />
        </div>
        <p className="news-home-mobile-text">{previewText}</p>

        {
          isCollapsed ?
            <ContentCollapse
              minHeight="0px"
              textClosed="Читать далее..."
              textOpen="Свернуть"
              btnClasses="ml-2"
              onToggle={onExpand}
            >{this.getContent()}
            </ContentCollapse> :
            <Fragment>
              {this.getContent()}
            </Fragment>
        }
      </div>
    );
  }
}