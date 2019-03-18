import React, { Component } from 'react';
import { Input, FormGroup, Label, Button } from 'reactstrap';
import { CloseIcon } from 'components/icons/close';
import { ArticleMainPhotoPlaceholder } from 'components/icons/article-main-photo-placeholder';

import './profile-add-article.scss';

export class ProfileAddArticle extends Component {
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
    const { onClose } = this.props;
    const { photo } = this.state;

    return (
      <div className="profile-add-article">
        <div className="profile-add-article-header-wrapper d-flex align-items-center justify-content-between mb-4">
          <h4 className="profile-add-article-header mb-0">Добавление новой статьи</h4>
          <CloseIcon onClick={onClose} />
        </div>
        <FormGroup>
          <Label className="profile-add-article-label">Заголовок</Label>
          <Input type="textarea" className="profile-add-article-input mb-4" />
        </FormGroup>
        <FormGroup>
          <Label className="profile-add-article-label">Краткое описание</Label>
          <Input type="textarea" className="profile-add-article-input mb-4" />
        </FormGroup>
        <FormGroup>
          <Label className="profile-add-article-label d-md-none">Главное фото</Label>
          <div className="d-flex align-item-md-center">
            {
              photo ?
                <img src={photo} alt="Article main" className="profile-add-article-main-photo" /> :
                <ArticleMainPhotoPlaceholder />
            }
            <div className="ml-3">
              <Label className="profile-add-article-label d-none d-md-block">Главное фото</Label>
              <Button className="profile-add-article-btn px-4 px-md-5" color="primary" onClick={this.onClick}>Загрузить</Button>
              <input type="file" ref={this.fileInput} accept=".png, .jpg, .jpeg" onChange={this.onChange} className="d-none" />
            </div>
          </div>
        </FormGroup>
        <FormGroup>
          <Label className="profile-add-article-label">Текс статьи</Label>
          <Input type="textarea" className="profile-add-article-input mb-4" />
        </FormGroup>
        <Button className="profile-add-article-btn profile-add-article-btn-bottom px-5 mr-md-3" color="primary">Отправить</Button>
        <Button onClick={onClose} className="profile-add-article-btn profile-add-article-btn-bottom" color="link">Отмена</Button>
      </div>
    )
  }
}