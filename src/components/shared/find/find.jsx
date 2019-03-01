import React, { Component } from 'react';
import { Button } from 'reactstrap';
import classnames from 'classnames';
import { SearchIcon } from './../../icons/search';

import './find.scss'

export class Find extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {
      searchValue: props.value,
    };
  }

  componentDidMount() {
    if (this.props.autofocus) {
      this.inputRef.current.focus();
    }
  }

  search = () => {
    this.props.onSearch(this.inputRef.current.value);
  }

  onChange = event => {
    this.setState({ searchValue: event.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange({ value: this.state.searchValue });
      }
    });
  }

  render() {
    const { searchValue } = this.state;
    const { shouldBorder } = this.props;

    return (
      <div className={classnames('find d-flex', { 'find-bordered': shouldBorder })}>
        <input
          ref={this.inputRef}
          className="px-3"
          type="text"
          name="find"
          id="find"
          placeholder="Текст для поиска"
          value={searchValue}
          onChange={this.onChange}
        />
        <span className="find-btn d-md-none" onClick={this.search}><SearchIcon /></span>
        <Button className="find-btn d-none d-md-block" onClick={this.search}>Найти</Button >
      </div>
    );
  }
}

Find.defaultProps = {
  className: '',
  value: '',
};
