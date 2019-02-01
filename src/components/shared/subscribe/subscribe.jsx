import React from 'react';
import classnames from 'classnames';

import './subscribe.scss'

export function Subscribe({ className }) {
  return (
    <div className={classnames('subscribe d-flex align-items-center flex-column', className)}>
      <p className="subscribe-title mb-4">Подпишитесь на рассылку, чтобы быть в курсе первым</p>
      <div className="subscribe-block d-flex">
        <input className="px-3" type="text" name="subscribe" id="subscribe" placeholder="Введите ваш email" />
        <span className=""><i className="fab fa-telegram-plane"></i></span>
      </div>
    </div>
  );
}

Subscribe.defaultProps = {
  className: '',
};
