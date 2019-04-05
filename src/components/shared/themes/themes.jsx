import React, { Component, Fragment } from 'react';
import { scrollToTop } from 'utils/shared';
import { HeaderNews } from 'components/header-news/header-news';
import { News } from 'components/news-block/sections/news';

export class Themes extends Component {
  state = {
    currentThemeId: 0,
    currectThemeName: ''
  }

  onThemeChange = ({ id, title }) => {
    scrollToTop();
    this.setState({
      currentThemeId: id,
      currectThemeName: title
    });
  }
  render() {
    const { isMobile, isTabletSm, children } = this.props;
    const { currentThemeId, currectThemeName } = this.state;

    return (
      <Fragment>
        {!isMobile && <HeaderNews onThemeChange={this.onThemeChange} />}
        {
          currentThemeId === 0 ?
            <Fragment>{children}</Fragment> :
            <Fragment>
              {!isMobile && <News isTabletSm={isTabletSm} search={currectThemeName} />}
            </Fragment>
        }
      </Fragment>
    );
  }
}