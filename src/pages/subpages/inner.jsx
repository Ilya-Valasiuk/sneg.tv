import React, { Component, Fragment } from "react";
import { HeaderNewsSingle } from "components/header-news/header-news-single";
import { withLoadingHeader } from "components/header-news/header-loading-hoc";
import { Inner as InnerComponent } from "components/inner/inner";
import { INNER_STUB_DATA, PARTNER_DATA, AUTHOR_ARTICLE_DATA } from "./stub-data";

class InnerUI extends Component {
  render() {
    const {
      progress,
      headerTitle,
      isMobile,
      onToggleCommentsPopup
    } = this.props;

    return (
      <Fragment>
        {!isMobile && (
          <HeaderNewsSingle title={headerTitle} progress={progress} />
        )}
        {INNER_STUB_DATA.map(
          ({ emptyComments, isCollapsed, showIframe, ...data }, index) => (
            <Fragment key={index}>
              <InnerComponent
                isMobile={isMobile}
                data={data}
                partnerData={PARTNER_DATA}
                onToggleCommentsPopup={onToggleCommentsPopup}
                emptyComments={emptyComments}
                isCollapsed={isCollapsed}
                showIframe={showIframe}
                showAuthorArticle={index === 0}
                articleData={AUTHOR_ARTICLE_DATA}
              />
              {index + 1 !== INNER_STUB_DATA.length && <hr />}
            </Fragment>
          )
        )}
      </Fragment>
    );
  }
}

export const Inner = withLoadingHeader(InnerUI);
