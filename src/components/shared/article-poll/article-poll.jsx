import React, { Component, Fragment } from 'react';
import { ArticlePollQuestions } from './article-poll-questions';
import { ArticlePollResults } from './article-poll-results';
import { STUB_DATA, STUB_RESULTS } from './stub-data';

import './article-poll.scss';



export class ArticlePoll extends Component {
  state = {
    shouldShowResults: false,
  }

  submit = () => {
    this.setState({shouldShowResults: true});
  }

  render() {
    const { className } = this.props;
    const { shouldShowResults } = this.state;

    return (
      <Fragment>
        {
          shouldShowResults ?
          <ArticlePollResults className={className} data={STUB_RESULTS} /> :
          <ArticlePollQuestions data={STUB_DATA} className={className} onSubmit={this.submit} />
        }
      </Fragment>
    );
  }
}
