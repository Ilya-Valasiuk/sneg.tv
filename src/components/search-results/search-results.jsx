import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { Find } from './../shared/find/find';
import { DropdownFilter } from '../shared/dropdown-filter/dropdown-filter';
import { SearchResultsItem } from './search-results-item';
import { AdBanner } from './../ad-banner/ad-baner';
import { More } from './../shared/more/more';
import { STUB_RESULT_DATA } from './stub-data';

import './search-results.scss';

const SEACTION_FILTER_DATA = {
  initialFilterValue: { value: 'Все рублики', id: 0 },
  filters: [
    { value: 'Все рубрики', id: 0 },
    { value: 'О Жизни', id: 1 },
    { value: 'О Здоровье', id: 2 },
  ],
};
const TIME_FILTER_DATA = {
  initialFilterValue: { value: 'За всё время', id: 0 },
  filters: [
    { value: 'За последний час', id: 0 },
    { value: 'За последний день', id: 1 },
    { value: 'За последний месяц', id: 2 },
  ],
};

export class SearchResultsUI extends Component {
  render() {
    const { results, onSearch } = this.props;

    return (
      <Container className="py-3 search-results padding-x-20">
        <Row>
          <Col xs={12} md="auto" className="news-item-line-wrapper-large mr-15">
            <Row className="align-items-center">
              <Col xs={12} className="mb-3 mb-md-2">
                <Find value={this.props.history.location.search.split('?value=')[1]} onSearch={onSearch} shouldBorder />
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="d-none d-md-block"><hr /></Col>
            </Row>
            <Row className="align-items-center justify-content-between">
              <Col xs={12} md="auto">
                <p className="search-results-count mb-md-0">Найдено <b>{results.length}</b> материалов</p>
              </Col>
              <Col xs={12} md="auto" className="d-flex">
                <DropdownFilter className="mr-3" data={SEACTION_FILTER_DATA} />
                <DropdownFilter data={TIME_FILTER_DATA} />
              </Col>
            </Row>
            <Row>
              <Col><hr /></Col>
            </Row>
            <Row>
              {results.map((resultItem, index) => (
                <Fragment>
                  <Col key={resultItem.id} xs={12}>
                    <SearchResultsItem {...resultItem} />
                  </Col>
                  { index + 1 !== results.length && <Col xs={12}><hr /></Col> }
                </Fragment>
              ))}
            </Row>
            <Row className="my-4" noGutters>
              <Col xs={12} className="news-item-line-wrapper-large mr-15">
                <More title="..." className="more-dots font-weight-bold" />
              </Col>
            </Row>
          </Col>
          <Col md="auto" className="news-item-line-wrapper d-none d-md-block">
            <div className="sticky-right-col">
              <Row noGutters>
                <Col className="px-0 pb-4 text-center">
                  <AdBanner bannerType="primeVideo" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

SearchResultsUI.defaultProps = {
  results: STUB_RESULT_DATA,
};

export const SearchResults = withRouter(SearchResultsUI);