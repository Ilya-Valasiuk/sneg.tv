import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
// import { Element } from 'react-scroll';
import Collapse from 'reactstrap/lib/Collapse';
import Button from 'reactstrap/lib/Button';

import './content-collapse.scss';

export class ContentCollapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    // this.collapseId = `collapse${Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER)}`;
  }

  componentDidMount() {
    if (this.collapse) {
      this.collapse.setState({ height: this.props.minHeight });
    }
  }

  toggle = () => {
    const isOpen = !this.state.isOpen;

    this.setState({ isOpen }, this.props.onToggle);
  };

  renderCollapseBtn = () => {
    const { btnClasses, textOpen, textClosed, justify } = this.props;
    if (this.state.isOpen) return false;
    return (
      <div className={`collapse-control py-0_5 mb-0 row ${justify}`}>
        <Button size="sm" color="link" className={classnames('content-collapse-button', btnClasses)} onClick={this.toggle}>
          <span className="control-text mr-0_5">{this.state.isOpen ? textOpen : textClosed}</span>
        </Button>
      </div>
    );
  };

  render() {
    const { minHeight, isEclipseFade, children, classes, showBtnBelow } = this.props;
    return (
      <div
        className={classnames('content-collapse', { isEclipseFade }, classes)}
        data-tracking-id="view_content_summary"
      >
        {/* <Element name={this.collapseId} /> */}
        {!showBtnBelow && this.renderCollapseBtn()}
        <Collapse
          isOpen={this.state.isOpen}
          ref={(collapse) => { this.collapse = collapse; }}
          style={this.state.isOpen ? '' : { height: minHeight, minHeight }}
        >
          {children}
        </Collapse>
        {showBtnBelow && this.renderCollapseBtn()}
      </div>
    );
  }
}

ContentCollapse.propTypes = {
  minHeight: PropTypes.string,
  children: PropTypes.node.isRequired,
  textClosed: PropTypes.string,
  textOpen: PropTypes.string,
  isEclipseFade: PropTypes.bool,
  classes: PropTypes.string,
  btnClasses: PropTypes.string,
  showBtnBelow: PropTypes.bool,
  justify: PropTypes.string,
  onToggle: PropTypes.func,
};

ContentCollapse.defaultProps = {
  minHeight: '0',
  textClosed: 'Read more',
  textOpen: 'Read less',
  isEclipseFade: true,
  classes: '',
  btnClasses: '',
  showBtnBelow: true,
  justify: 'justify-content-start',
  onToggle: () => {},
};
