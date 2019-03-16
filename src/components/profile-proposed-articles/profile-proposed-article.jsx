import React from 'react';
import { Button } from 'reactstrap';
import classnames from 'classnames';

import './profile-proposed-article.scss';

const getStatusText = status => status === 0 ? 'На рассмотрении' : 'Опубликовано';

export function ProfileProposedArticle({ title, previewText, status }) {
  return (
    <div className="profile-proposed-article">
      <h4 className="profile-proposed-article-title">{title}</h4>
      <p className="profile-proposed-article-text">{previewText}</p>
      <div className="mb-2">
        <Button className="px-0 profile-proposed-article-btn mr-5" color="link">Редактировать</Button>
        {status === 1 && <Button className="px-0 profile-proposed-article-btn mr-5" color="link">Читать на сайте</Button>}
        <Button className="px-0 profile-proposed-article-btn" outline color="danger">Удалить</Button>
      </div>
      <p className={classnames('profile-proposed-article-status mb-0', { 'approved': status === 1 })}>{getStatusText(status)}</p>
    </div>
  );
}