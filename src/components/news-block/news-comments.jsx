import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const count = 182
const comments = [{ avatartImg: '', userName: 'useless_mouth', time: '15 минут назад', text: 'Правильно, давайте посадим его на 18 лет с конфискацией! Такие люди не должны ходить по дорогам нашей великой и необъятной Родины! Да здравствует Россия!' }];

export function NewsComments({ }) {
  return (
    <div className="news-comments">
      <div className="news-comments-title size-14 text-uppercase mb-4">комментарии</div>
      {comments.map(comment => <Comment {...comment} />)}
      <div className="news-comments-buttons">
        <Button color="link">Читать все ({count})</Button>
        <Button color="link" className="ml-2">Комментировать</Button>
      </div>
    </div>
  );
}

function Comment({ avatartImg, userName, time, text }) {
  return (
    <Row>
      <Col xs='auto' className="pr-2">
        <div className="news-comments-avatar-wrapper">
          {
            avatartImg ?
            <img src={avatartImg} className="news-comments-avatar rounded-circle" alt="avatar" />
            : <span className="news-comments-avatar-fallback rounded-circle"></span>
          }
        </div>
      </Col>
      <Col className="pl-1">
        <div className="mb-3 news-comments-author">
          {userName} <span className="time">{time}</span>
        </div>
        <p className="news-comments-text">{text}</p>
      </Col>
    </Row>
  );
}