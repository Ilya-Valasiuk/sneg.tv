import React, { Component, Fragment } from 'react';
import { Themes } from 'components/shared/themes/themes';
import { AdBanner } from 'components/ad-banner/ad-baner';
import { LifeSection } from 'components/news-block/sections/life-section';
import { LifeSectionMobile } from 'components/news-block/sections/life-section-mobile';
import { KnowledgeSection } from 'components/news-block/sections/knowledge-section';
import { KnowledgeSectionMobile } from 'components/news-block/sections/knowledge-section-mobile';
import { EmotionSection } from 'components/news-block/sections/emotion-section';
import { EmotionSectionMobile } from 'components/news-block/sections/emotion-section-mobile';
import { News } from 'components/news-block/sections/news';
import { NewsMobile } from 'components/news-block/sections/news-mobile';
import { withLoadingHeader } from 'components/header-news/header-loading-hoc';

function HomeComponent({ isMobile, isTabletSm }) {
  return (
    <Fragment>
      {!isMobile && <AdBanner bannerType="fordBanner" className="w-100" />}
      {
        isMobile ?
          <Fragment>
            <LifeSectionMobile />
            <KnowledgeSectionMobile />
            <EmotionSectionMobile />
            <NewsMobile />
          </Fragment> :
          <Fragment>
            <LifeSection />
            <KnowledgeSection />
            <EmotionSection />
            <div className="mb-5">
              <AdBanner bannerType="barsRestaurant" className="w-100" />
            </div>
            <News isTabletSm={isTabletSm} isScrollElement />
          </Fragment>
      }
    </Fragment>
  )
}

const HomeUI = withLoadingHeader(HomeComponent);

export class Home extends Component {
  render() {
    const { isMobile, isTabletSm } = this.props;

    return (
      <Themes isMobile={isMobile} isTabletSm={isTabletSm}>
        <Fragment>
          <HomeUI {...this.props} />
        </Fragment>
      </Themes>
    );
  }
}
