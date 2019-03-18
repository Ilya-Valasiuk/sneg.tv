import React, { Component } from 'react';
import { Button, Input, FormGroup, Label, Row, Col } from 'reactstrap';
import { NoProfilePhoto } from 'components/icons/no-profile-photo';

import './profile-info.scss';

export class ProfileInfo extends Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();

    this.state = {
      photo: null,
    };
  }

  onClick = () => {
    this.fileInput.current.click();
  }

  onChange = () => {
    const curFiles = this.fileInput.current.files;
    if (!curFiles.length) {
      this.setState({ photo: null });
    } else {
      const photoSrc = window.URL.createObjectURL(curFiles[0]);
      this.setState({ photo: photoSrc });
    }
  }

  render() {
    return (
      <div className="profile-info">
        <Row className="profile-info-title mb-4 align-items-center">
          <Col xs="12" md="auto">Общая информация</Col>
          <Col className="d-none d-md-block"><hr /></Col>
        </Row>
        <FormGroup>
          <Label className="profile-info-label">Фото профиля</Label>
          <div className="profile-info-photo-wrapper d-flex align-items-center mb-4">
            <span className="mr-4">
              {this.state.photo ?
                <img src={this.state.photo} className="profile-info-photo" alt="profile avatar" /> :
                <NoProfilePhoto />
              }
            </span>
            <Button onClick={this.onClick} className="profile-info-photo-btn px-5 py-2" color="primary">Загрузить</Button>
            <input type="file" ref={this.fileInput} accept=".png, .jpg, .jpeg" onChange={this.onChange} className="d-none" />
          </div>
        </FormGroup>
        <FormGroup>
          <Label className="profile-info-label">Адрес email</Label>
          <Input className="profile-info-input mb-4" placeholder="jason_browdy@gmail.com" />
        </FormGroup>
        <FormGroup>
          <Label className="profile-info-label">Имя пользователя</Label>
          <Input className="profile-info-input mb-4" placeholder="jason_browdy15" />
        </FormGroup>
        <FormGroup>
          <Row className="profile-info-title mb-4 align-items-center">
            <Col xs="12" md="auto">Смена пароля</Col>
            <Col className="d-none d-md-block"><hr /></Col>
          </Row>
          <Input className="profile-info-input mb-3" placeholder="Введите старый пароль" />
          <Input className="profile-info-input mb-3" placeholder="Введите новый пароль" />
          <Input className="profile-info-input mb-4" placeholder="Повторите новый пароль" />
        </FormGroup>
        <Row className="profile-info-title mb-4 align-items-center">
          <Col xs="12" md="auto">настройки подписки</Col>
          <Col className="d-none d-md-block"><hr /></Col>
        </Row>
        <FormGroup check>
          <Label className="profile-info-label" check>
            <Input type="checkbox" />Получать дайджест новостей на мой email
          </Label>
        </FormGroup>
      </div>
    );
  }
}