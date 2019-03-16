import React, { Fragment } from 'react';
import { FavoriteArticle } from 'components/favorite-article/favorite-article';

import './profile-favorites.scss';

export function ProfileFavorites({ data }) {
  return (
    <div className="profile-favorites">
      <h4 className="profile-favorites-header">избранные статьи</h4>
      {data.map((favoriteArticle, index) =>
        <Fragment>
          <FavoriteArticle id={favoriteArticle.id} {...favoriteArticle} />
          {data.length - 1 !== index && <hr className="my-4" />}
        </Fragment>
      )}
    </div>
  );
}