import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import {
  withRouter
} from "react-router-dom";

import './search.scss';

export class SearchUI extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }

  search = () => {
    this.props.history.push(`/search?${this.inputRef.current.value}`);
  }

  render() {
    return (
      <div className="search">
        <Row className="search-content pl-3 pt-4 mt-3" noGutters>
          <Col xs={12} className="search-title"><p className="mb-0">ВВЕДИТЕ КЛЮЧЕВОЕ СЛОВО</p></Col>
          <Col xs={9}>
            <input className="search-input text-white pr-3 h-100 w-100" type="text" ref={this.inputRef} />
          </Col>
          <Col xs={3} className="text-right">
            <Button className="search-find text-white pt-2" color="primary" onClick={this.search}>НАЙТИ</Button>
          </Col>
          <Col xs={12}><hr className="search-separator" /></Col>
        </Row>
      </div>
    );
  }
}

export const Search = withRouter(SearchUI);