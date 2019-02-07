import React, { Component } from 'react';
import classnames from 'classnames';
import { Button, Form, FormGroup, CustomInput } from 'reactstrap';

import './article-poll.scss';

export class ArticlePollQuestions extends Component {
  render() {
    const {
      className,
      data,
      onSubmit,
    } = this.props;

    return (
      <Form className={classnames('article-poll', className)}>
        <FormGroup tag="fieldset" className="mb-0">
          <legend className="article-poll-title mb-4">{data.title}</legend>
          <FormGroup className="mb-4" >
            {data.results.map(({ name, title }) => (
              <CustomInput className="mb-4" id={name} type="radio" name={data.formName} key={name} label={title} />
            ))}
          </FormGroup>
        </FormGroup>

        <div className="text-center">
          <Button onClick={onSubmit} className="text-uppercase">Проголосовать</Button>
        </div>
      </Form>
    );
  }
}
