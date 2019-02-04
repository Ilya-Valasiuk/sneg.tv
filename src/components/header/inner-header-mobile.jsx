import React, { Component, Fragment } from 'react';
import Sticky from 'react-sticky-el';
import { Link as RouterLink } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { SnowLogo } from '../snow-logo/snow-logo';
import { SocialIcons } from './../shared/social-icons/social-icons';
import { HeaderLoading } from './../header-news/header-loading';
import { SharePopup } from './../share-popup/share-popup';

import { MenuIcon } from './../icons/menu';
import { NewsFeedIcon } from './../icons/news-feed';
import { LeftIcon } from './../icons/left';
import { CloseIcon } from './../icons/close';
import { ShareIcon } from './../icons/share';

import './header.scss';

export class InnerHeaderMobile extends Component {
  state = {
    progress: this.props.progress,
  };

  changeHeaderHandler = e => {
    const [progress] = [e.detail.progress];

    this.setState({ progress });
  }

  componentDidMount() {
    document.addEventListener('header-change', this.changeHeaderHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('header-change', this.changeHeaderHandler);
  }

  render() {
    const { isMenuOpened, onMenuToggle, isFeedPanelOpened, onFeedPanelToggle, isShareOpened, onShareToggle } = this.props;
    const { progress } = this.state;

    return (
      <Sticky scrollElement=".snow-col-main" className="header-mobile header-mobile-inner">
        <header className="header">
          <Row className="justify-content-between header-mobile-inner-default" noGutters>
            {!isShareOpened &&
              <Col xs="auto" className="px-0">
                <RouterLink className="header-back px-3" to="/">
                  <LeftIcon />
                </RouterLink>
              </Col>
            }
            <Col className="px-0">
              <SnowLogo />
            </Col>
            <Col xs="auto" className="d-flex px-0">
              <div className="header-share px-3" onClick={onShareToggle}>
                {isShareOpened ? <CloseIcon /> : <ShareIcon />}
              </div>
              {
                !isShareOpened &&
                <Fragment>
                  <div className="header-search px-3" onClick={onFeedPanelToggle}>
                    {isFeedPanelOpened ? <CloseIcon /> : <NewsFeedIcon />}
                  </div>
                  <div className="header-hamburger px-3" onClick={onMenuToggle}>
                    {isMenuOpened ? <CloseIcon /> : <MenuIcon />}
                  </div>
                </Fragment>
              }
            </Col>
            <HeaderLoading progress={progress} />
          </Row>
          <Row className="justify-content-between header-mobile-inner-social-icons" noGutters>
            <Col xs="auto" className="pl-2 h-100">
              <SocialIcons className="h-100" />
            </Col>
            <HeaderLoading progress={progress} />
          </Row>
          {isShareOpened && <SharePopup />}
        </header>
      </Sticky>
    );
  }
}