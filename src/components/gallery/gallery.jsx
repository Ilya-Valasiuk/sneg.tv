import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Swipe from 'react-easy-swipe';
import classnames from 'classnames';
import { PhotoIcon } from 'components/icons/photo';
import { CloseIcon } from 'components/icons/close';
import { ShareIcon } from 'components/icons/share';
import { FullScreenIcon } from 'components/icons/fullscreen';
import { LeftIcon3 } from 'components/icons/left-3';
import { RightIcon3 } from 'components/icons/right-3';
import { SocialIcons } from 'components/shared/social-icons/social-icons';
import { SimpleArticle } from 'components/simple-article/simple-article';
import { NewsDateType } from 'components/news-block/news-date-type/news-date-type';
import { SharePopup } from 'components/share-popup/share-popup';

import { GALLERY_STUB_DATA, GALLERY_MORE_DATA } from './stub-data';

import './gallery.scss';

export class Gallery extends Component {
  state = {
    isOpen: false,
    isShareOpened: false,
    currentIndex: 0,
    shouldShowPartners: false,
  }

  next = () => {
    const dataLength = this.props.data.slides.length;
    const { currentIndex, shouldShowPartners } = this.state;

    if (dataLength === currentIndex + 1 && !shouldShowPartners) {
      this.setState({
        currentIndex: dataLength - 1,
        shouldShowPartners: true,
      })
    } else if (dataLength === currentIndex + 1 && shouldShowPartners) {
      // this.setState({	
      //   currentIndex: 0,	
      //   shouldShowPartners: false,	
      // });	
    } else {
      this.setState({
        currentIndex: currentIndex + 1,
      })
    }
  }

  prev = (event) => {
    console.log(event)
    const { currentIndex, shouldShowPartners } = this.state;

    if (shouldShowPartners) {
      this.setState({
        shouldShowPartners: false,
      })
    } else {
      this.setState({
        currentIndex: currentIndex > 0 ? currentIndex - 1 : 0,
      })
    }
  }

  toggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      currentIndex: 0,
      shouldShowPartners: false,
    }), () => {
      if (this.props.onModalToggle) {
        this.props.onModalToggle();
      }
    });
  }

  toggleShare = () => {
    this.setState({
      isShareOpened: !this.state.isShareOpened,
    })
  }

  render() {
    const { data, isMobile } = this.props;
    const { slides, title, ...otherProps } = data;
    const { isOpen, isShareOpened, currentIndex, shouldShowPartners } = this.state;
    const maxPreviewImages = isMobile ? 3 : 5;
    const previewData = slides.slice(1, maxPreviewImages);

    return (
      <div className="gallery my-3">
        <Row className="gallery-widget" onClick={this.toggle}>
          <Col xs={12}>
            <img src={slides[0].image} alt="Preview large" className="gallery-widget-image-large" />
            {!isMobile && <FullScreenIcon />}
          </Col>
          <Col xs={12}>
            <Row className="gallery-widget-image-small-wrapper mx-0">
              {previewData.map((previewItem, index) => (
                <Col xs={12 / (maxPreviewImages - 1)} key={previewItem.id} className="gallery-widget-image-small-col pl-0">
                  <div className="position-relative">
                    <img src={previewItem.image} alt="Preview small" className="gallery-widget-image-small" />
                    {previewData.length - 1 === index &&
                      <div className="gallery-widget-blackout d-flex align-items-center justify-content-center">
                        <PhotoIcon />
                        <span className="gallery-widget-blackout-more ml-2">+{slides.length}</span>
                      </div>
                    }
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        {isOpen &&
          <Swipe onSwipeLeft={this.next} onSwipeRight={this.prev} tolerance={60} >
            <div className="gallery-popup">
              {
                !isMobile &&
                <Fragment>
                  {currentIndex > 0 &&
                    <div className="gallery-popup-navigation gallery-popup-navigation-left" onClick={this.prev}>
                      <LeftIcon3 />
                    </div>
                  }
                  {!shouldShowPartners &&
                    <div className="gallery-popup-navigation gallery-popup-navigation-right" onClick={this.next}>
                      <RightIcon3 />
                    </div>
                  }

                </Fragment>
              }
              <Row className="gallery-popup-header align-items-center mx-0">
                <Col>
                  <Row>
                    <NewsDateType {...otherProps} />
                  </Row>
                </Col>
                {
                  isMobile &&
                  <Col xs="auto" className="px-4" onClick={this.toggleShare}>
                    {isShareOpened ? <CloseIcon /> : <ShareIcon />}
                  </Col>
                }
                <Col xs="auto" className="px-4">
                  <CloseIcon onClick={this.toggle} />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h4 className="gallery-popup-title">{title}</h4>
                </Col>
              </Row>
              {slides.map((item, index) => (
                <Row className={classnames('gallery-popup-content', { 'gallery-popup-content-active': currentIndex === index && !shouldShowPartners })} key={item.id}>
                  <Col xs="auto" className="gallery-popup-image">
                    <img className="img-fluid" src={item.image} alt="Content" />
                    <div className="gallery-popup-image-element" style={{ backgroundImage: `url(${item.image})` }}></div>
                  </Col>
                  <Col xs="auto">
                    <p className="gallery-popup-text">{item.text}</p>
                  </Col>
                  {!isMobile &&
                    <Col xs="auto">
                      <Row className="gallery-popup-caption">
                        <Col>
                          <SocialIcons />
                        </Col>
                        <Col md="auto" className="gallery-popup-author">
                          Фото: {item.author}
                        </Col>
                      </Row>
                    </Col>
                  }
                </Row>
              ))}
              <Row className={classnames('gallery-popup-partners', { 'gallery-popup-partners-active': shouldShowPartners })}>
                <Col className="gallery-popup-partners-wrapper d-md-flex flex-column justify-content-center" xs={12}>
                  <h5 className="gallery-popup-partners-title mb-3">Смотрите также</h5>
                  <Row>
                    {GALLERY_MORE_DATA.map((item, index) =>
                      <Col key={item.id} xs={12} md={4}>
                        <SimpleArticle {...item} hideDate />
                        <div className="gallery-popup-partners-prefix">{item.count} фото</div>
                        {isMobile && GALLERY_MORE_DATA.length - 1 !== index && <hr className="my-4" />}
                      </Col>
                    )}
                  </Row>
                </Col>
              </Row>
              {isShareOpened && <SharePopup />}
            </div>
          </Swipe>
        }
      </div>
    )
  }
}

Gallery.defaultProps = {
  data: GALLERY_STUB_DATA,
};
