import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { Input, Button } from 'reactstrap';
import { CloseIcon } from 'components/icons/close';
import { VkIcon } from 'components/icons/socials/vk-icon';
import { FBIcon } from 'components/icons/socials/fb-icon';
import { TwitterIcon } from 'components/icons/socials/twitter-icon';

import './authentication.scss';

export class AuthenticationView extends Component {
  state = {
    isRegistration: false,
  }

  toggleForm = () => {
    this.setState({ isRegistration: !this.state.isRegistration });
  }

  render() {
    const { onClose } = this.props;
    const { isRegistration } = this.state;

    return (
      <div className={classnames('authentication', { 'authentication-registration': isRegistration })}>
        <div className="authentication-main">
          <div className="authentication-title d-flex justify-content-between mb-4">
            <span>{isRegistration ? 'Регистрация' : 'Вход на сайт'}</span>
            <span onClick={onClose}><CloseIcon /></span>
          </div>
          {!isRegistration &&
            <Fragment>
              <div className="authentication-socials d-flex mb-4">
                <div className="authentication-socials-item mr-3">
                  <VkIcon />
                </div>
                <div className="authentication-socials-item mr-3">
                  <FBIcon />
                </div>
                <div className="authentication-socials-item">
                  <TwitterIcon />
                </div>
              </div>
            </Fragment>
          }
          <div className="authentication-form">
            {
              isRegistration ?
                <Fragment>
                  <Input placeholder="Email" className="mb-3" />
                  <Input placeholder="Пароль" className="mb-3" />
                  <Input placeholder="Пароль" className="mb-3" />
                </Fragment> :
                <Fragment>
                  <div className="authentication-form-title mb-4">или через email</div>
                  <Input placeholder="Email" className="mb-3" />
                  <Input placeholder="Пароль" className="mb-3" />
                </Fragment>
            }
            <div className="d-flex flex-column">
              <Button color="primary" className="authentication-form-enter mb-3" onClick={onClose}>{isRegistration ? 'Зарегестрироваться' : 'Войти'}</Button>
              <Button className="authentication-form-registration" onClick={this.toggleForm} outline>{!isRegistration ? 'Регистрация' : 'Вход на сайт'}</Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="authentication-info">
          <div className="authentication-info-title mb-3">Зачем это нужно?</div>
          <p>После входа в свой личный кабинет вы сможете:</p>
          <ul>
            <li className="mb-3">Оставлять комментарии</li>
            <li className="mb-3">Предлагать новости для публикации на сайте</li>
            <li className="mb-3">Сохранять избранные статьи в закладки</li>
            <li className="mb-3">Принимать участие в голосованиях на сайте</li>
          </ul>
        </div>
      </div>
    );                
  }
}