import React, { Component } from 'react';
import classnames from 'classnames';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { DownIcon } from 'components/icons/down';
import { CloseIcon } from 'components/icons/close';

import './dropdown-filter.scss';

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

  render() {
    const { className, isMobile } = this.props;
    const { filters, initialFilterValue } = this.props.data;

    return (
      <div className="dropdown-filter-wrapper">
        <Dropdown
          className={classnames('dropdown-filter', className)}
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
