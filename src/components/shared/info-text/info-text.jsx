import React from 'react';

import './info-text.scss';

export function InfoText({ }) {
  return (
    <div className="info-text">
      <p className="info-text-logo text-white">снег.<span className="text-blue">tv</span></p>
      <p>© 2018 Интернет-газета «Sneg»</p>
      <p>
        Исключительные права на фото- и иные материалы принадлежат авторам. Любое размещение материалов на сторонних ресурсах необходимо согласовывать с правообладателями.
              <br />
        <br />
        По всем вопросам обращайтесь на <a className="text-white" href="mailto:info@sneg.tv">info@sneg.tv</a>
        <br />
        <br />
        Нашли опечатку? Выделите слово и нажмите <span className="text-white">Ctrl+Enter</span>
      </p>
    </div>
  );
}