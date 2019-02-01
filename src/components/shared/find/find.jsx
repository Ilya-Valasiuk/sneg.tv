import React from 'react';
import classnames from 'classnames';
import { SearchIcon } from './../../icons/search';

import './find.scss'

export function Find({ className }) {
  return (
    <div className={classnames('find d-flex flex-column', className)}>
      <p className="find-title mb-2">Поиск по сайту</p>
      <div className="find-block d-flex">
        <input className="px-3" type="text" name="find" id="find" placeholder="Текс для поиска" />
        <span className=""><SearchIcon /></span>
      </div>
    </div>
  );
}

Find.defaultProps = {
  className: '',
};
