import React, { Component, Fragment } from 'react';
import { VerticalCarousel } from 'components/shared/vertical-carousel/vertical-carousel';
import { ProfileInfo } from 'components/profile-info/profile-info';
import { ProfileComments } from 'components/profile-comments/profile-comments';
import { ProfileProposedArticles } from 'components/profile-proposed-articles/profile-proposed-articles';
import { ProfileFavorites } from 'components/profile-favorites/profile-favorites';

import { PROFILE_COMMENTS_DATA, PROFILE_PROPOSED_ARTICLES, PROFILE_FAVORITES } from './stub-data';

const tabs = [{
  title: 'Профиль',
  id: 0,
  link: '#',
  active: true,
  getComponent: () => <ProfileInfo />
}, {
  title: 'Комментарии',
  id: 1,
  link: '#',
  getComponent: () => <ProfileComments data={PROFILE_COMMENTS_DATA} />
}, {
  title: 'Предложенные статьи',
  id: 2,
  link: '#',
  getComponent: () => <ProfileProposedArticles data={PROFILE_PROPOSED_ARTICLES} />
}, {
  title: 'Избранное',
  id: 3,
  link: '#',
  getComponent: () => <ProfileFavorites data={PROFILE_FAVORITES} />
}];


export class Profile extends Component {
  state = {
    selectedTab: tabs[0],
  }

  onTabChange = (tab) => {
    this.setState({ selectedTab: tab });
  }

  render() {
    console.log(this.state.selectedTab);

    return (
      <Fragment>
        <VerticalCarousel data={tabs} onTabChange={this.onTabChange} />
        {this.state.selectedTab.getComponent()}
      </Fragment>
    )
  }
}