import React from 'react';

import './share-popup.scss';

export function SharePopup({}) {
  return (
    <ul className="share-popup w-100 p-4">
      <li><i className="share-popup-icon fab fa-vk" />Вконтакте</li>
      <li><i className="share-popup-icon fab fa-facebook-f" />facebook</li>
      <li><i className="share-popup-icon fab fa-odnoklassniki" />Одноклассники</li>
      <li><i className="share-popup-icon fab fa-twitter" />twitter</li>
      <li><i className="share-popup-icon fab fa-viber" />viber</li>
      <li><i className="share-popup-icon fab fa-telegram-plane" />telegram</li>
      <li><i className="share-popup-icon fab fa-whatsapp" />whatsapp</li>
      <li><i className="share-popup-icon fas fa-envelope" />отправить по email</li>
      <li><i className="share-popup-icon fas fa-link" />копировать ссылку</li>
    </ul>
  );
}