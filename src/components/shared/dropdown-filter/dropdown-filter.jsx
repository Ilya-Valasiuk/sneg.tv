import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { DownIcon } from 'components/icons/down';
import { CloseIcon } from 'components/icons/close';
import { DateRange } from 'components/shared/date-range/date-range';

import './dropdown-filter.scss';

const getInitialRange = filter => {
  if (filter.id === -1) {
    return filter.dataRangeObject;
  }

  return null;
}

export class DropdownFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      filter: props.data.initialFilterValue,
    };
  }

  setCurrentFilter = (filter) => {
    this.setState({ filter, dropdownOpen: !this.props.isMobile });
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onSelectChange = (data) => {
    if (!data) {
      return null;
    }
    const { start, end } = data;

    const filterValue = {
      id: -1,
      value: end ? `${start.format('DD.MM')} - ${end.format('DD.MM')}` : start.format('DD.MM'),
      dataRangeObject: data,
    }

    this.setState({ filter: filterValue });

    setTimeout(() => {
      this.toggle();
    }, 200)
    

    // this.props.onSelectChange();
  }

  render() {
    const { className, isMobile, showDateRange } = this.props;
    const { filters, initialFilterValue } = this.props.data;

    return (
      <div className="dropdown-filter-wrapper">
        <Dropdown
          className={classnames('dropdown-filter', { 'dropdown-filter--with-range': showDateRange }, className)}
          isOpen={!isMobile && this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle outline className="toggle-btn">
            {this.state.filter.value}
            <span className="dropdown-filter-arrow ml-2"><DownIcon /></span>
          </DropdownToggle>
          <DropdownMenu right>
            {filters.map((filter) => (
              <DropdownItem
                key={filter.id}
                active={filter.id === this.state.filter.id}
                onClick={() => this.setCurrentFilter(filter)}
              >{filter.value}</DropdownItem>
            ))}
            {showDateRange &&
              <Fragment>
                <hr />
                <DateRange initialRange={getInitialRange(this.state.filter)} onSelectChange={this.onSelectChange} />
              </Fragment>
            }
          </DropdownMenu>
        </Dropdown>
        {isMobile && this.state.dropdownOpen &&
          <div className="dropdown-filter-menu">
            <div className="dropdown-filter-menu-header d-flex justify-content-between mb-4">
              {initialFilterValue.value} <span onClick={this.toggle}><CloseIcon /></span></div>
            <ul className="dropdown-filter-menu-items">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={classnames('dropdown-filter-menu-item', { selected: this.state.filter.id === filter.id })}
                  onClick={() => this.setCurrentFilter(filter)}>
                  {filter.value}
                </li>
              ))}
            </ul>
            {showDateRange &&
              <Fragment>
                <hr className="dropdown-filter-separator" />
                <DateRange initialRange={getInitialRange(this.state.filter)} onSelectChange={this.onSelectChange} />
              </Fragment>
            }
          </div>
        }
      </div>
    );
  };
}

DropdownFilter.defaultProps = {
  className: '',
  data: {
    initialFilterValue: {},
    filters: [],
  },
};
