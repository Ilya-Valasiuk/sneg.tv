import React, { Component, Fragment } from 'react';
import DateRangePicker from 'react-daterange-picker';
import { LeftIcon2 } from 'components/icons/left-2';
import { RightIcon2 } from 'components/icons/right-2';
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)

import './date-range.scss';

function PaginationArrowComponent(props) {
  const isNext = props.direction === 'next';

  return (
    <Fragment>
      {isNext ?
        <span className="date-range-arrow date-range-arrow--right" onClick={props.onTrigger}><RightIcon2 /></span> :
        <span className="date-range-arrow date-range-arrow--left" onClick={props.onTrigger}><LeftIcon2 /></span>
      }
    </Fragment>
  )
}

export class DateRange extends Component {
  state = {
    dates: this.props.initialRange,
  }

  onSelect = dates => this.setState({ dates }, () => {
    if (this.props.onSelectChange) {
      this.props.onSelectChange(this.state.dates);
    }
  })

  render() {
    return (
      <div className="date-range">
        <DateRangePicker
          onSelect={this.onSelect}
          value={this.state.dates}
          singleDateRange
          paginationArrowComponent={PaginationArrowComponent}
        />
      </div>
    );
  }
}