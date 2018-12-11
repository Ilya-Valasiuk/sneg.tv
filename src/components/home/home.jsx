import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { Header } from '../header/header';
import { HeaderNews } from '../header-news/header-news';
import { AdBanner } from './../ad-banner/ad-baner';
import { LifeSection } from './../news-block/sections/life-section';
import { KnowledgeSection } from './../news-block/sections/knowledge-section';
import { EmotionSection } from './../news-block/sections/emotion-section';
import { News } from './../news-block/news';
import { Footer } from './../footer/footer';
import { Menu } from './../menu/menu';
import { Search } from './../search/search';

import './home.scss'

export class Home extends Component {

  render() {
    const { isMenuOpened, isSearchOpened, onMenuToggle, onSearchToggle } = this.props;

    return (
      <div className={classnames('home', { 'menu-opened': isMenuOpened })}>
        <Header isMenuOpened={isMenuOpened} isSearchOpened={isSearchOpened} onMenuToggle={onMenuToggle} onSearchToggle={onSearchToggle} />

        {
          isMenuOpened ?
            <Menu /> :
            <Fragment>
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
            </Fragment>
        }
        {
          isSearchOpened && <Search />
        }
      </div>
    );
  }
}
