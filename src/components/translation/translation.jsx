import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import Switch from 'react-toggle-switch'

import { TRANSLATION_DATA } from './stub-data';

import './translation.scss';

export class Translation extends Component {
  state = {
    switched: false,
  }

  toggleSwitch = () => {
    this.setState(prevState => ({
      switched: !prevState.switched
    }));
  };

  render() {
    const { onToggleCommentsPopup } = this.props;
    const { updateCount, translations } = TRANSLATION_DATA;


    return (
      <div className="translation">
        <Button color="link" className="translation-show-btn mb-3 mb-md-4">Показать {updateCount} обновления</Button>
        <div className="translation-switch mb-3 mb-md-5">
          <Switch onClick={this.toggleSwitch} on={this.state.switched} />
          <span className="ml-2">читать в хронологическом порядке</span>
        </div>
        {translations.map((translationData, index) =>
          <Fragment key={translationData.key}>
            <div className="mb-3 d-flex flex-column flex-md-row">
              <div className="mb-3 mb-md-0 pt-md-2">
                <div className="translation-time">
                  {translationData.time}
                </div>
              </div>
              <div className="ml-md-3">
                <div className="translation-text mb-3" dangerouslySetInnerHTML={{ __html: translationData.text }} />
                <Button className="translation-show-comments" color="link" onClick={onToggleCommentsPopup}>Комментарии</Button>
              </div>
            </div>
            {translations.length - 1 !== index && <hr />}
          </Fragment>
        )}
      </div>
    )
  }
}