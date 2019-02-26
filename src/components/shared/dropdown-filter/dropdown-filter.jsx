import React, { Component } from 'react';
import classnames from 'classnames';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { DownIcon } from './../../icons/down';

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
    this.setState({ filter });
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { className } = this.props;
    const { filters } = this.props.data;

    return (
      <Dropdown
        className={classnames('dropdown-filter', className)}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle outline className="toggle-btn">
          {this.state.filter.value}
          <span className="dropdown-filter-arrow ml-2"><DownIcon /></span>
        </DropdownToggle>
        <DropdownMenu>
          {filters.map((filter) => (
            <DropdownItem
              key={filter.id}
              active={filter.id === this.state.filter.id}
              onClick={() => this.setCurrentFilter(filter)}
            >{filter.value}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
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
