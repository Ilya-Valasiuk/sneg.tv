import React from 'react';
import { Header } from '../header/header';
import { HeaderNews } from '../header-news/header-news';
import { AdBanner } from './../ad-banner/ad-baner';
import { LifeSection } from './../news-block/sections/life-section';
import { KnowledgeSection } from './../news-block/sections/knowledge-section';
import { EmotionSection } from './../news-block/sections/emotion-section';
import { News } from './../news-block/news';
import { Footer } from './../footer/footer';

import './home.scss'

export function Home() {
  return (
    <div className="home">
      <Header />
      <HeaderNews />
      <AdBanner bannerType="fordBanner" />
      <LifeSection />
      <KnowledgeSection />
      <EmotionSection />
      <div className="mb-5">
        <AdBanner bannerType="barsRestaurant" />
      </div>
      <News />
      <Footer />
    </div>
  );
}
