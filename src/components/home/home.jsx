import React, { Component, Fragment } from 'react';
import { HeaderNews } from '../header-news/header-news';
import { AdBanner } from './../ad-banner/ad-baner';
import { LifeSection } from './../news-block/sections/life-section';
import { KnowledgeSection } from './../news-block/sections/knowledge-section';
import { EmotionSection } from './../news-block/sections/emotion-section';
import { News } from './../news-block/news';

export class Home extends Component {

  render() {
    return (
      <Fragment>
        <HeaderNews />
        <AdBanner bannerType="fordBanner" className="w-100" />
        <LifeSection />
        <KnowledgeSection />
        <EmotionSection />
        <div className="mb-5">
          <AdBanner bannerType="barsRestaurant" className="w-100" />
        </div>
        <News />
      </Fragment>

    );
  }
}
