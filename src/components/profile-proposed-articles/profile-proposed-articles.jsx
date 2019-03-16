import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import { ProfileProposedArticle } from 'components/profile-proposed-articles/profile-proposed-article';
import { ProfileAddArticle } from 'components/profile-add-article/profile-add-article';

import './profile-proposed-articles.scss';

export class ProfileProposedArticles extends Component {

  state = {
    isEditing: false,
  }

  toggleAddArticle = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    const { data } = this.props;
    const { isEditing } = this.state;

    return (
      <div className="profile-proposed-articles">
        <h4 className="profile-proposed-articles-header mb-3">Предложенные статьи</h4>
        <Button
          color="primary"
          className="profile-proposed-articles-btn w-100 mb-4"
          onClick={this.toggleAddArticle}
        >
          Предложить новую статью
        </Button>
        <hr />
        {data.map((article, index) =>
          <Fragment key={article.id}>
            <ProfileProposedArticle {...article} />
            {data.length - 1 !== index && <hr />}
          </Fragment>
        )}
        {isEditing && <ProfileAddArticle onClose={this.toggleAddArticle} />}
      </div>
    );
  }
}