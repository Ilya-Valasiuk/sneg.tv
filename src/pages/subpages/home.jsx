import React, { Component, Fragment } from 'react';
import { HeaderNews } from 'components/header-news/header-news';
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


export class HomeUI extends Component {
  render() {
    const { isMobile, isTabletSm } = this.props;

    return (
      <Fragment>
        {!isMobile && <HeaderNews />}
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
              <News isTabletSm={isTabletSm} />
            </Fragment>
        }
      </Fragment>
    );
  }
}

export const Home = withLoadingHeader(HomeUI, true);