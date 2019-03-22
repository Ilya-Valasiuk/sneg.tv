import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Swipe from 'react-easy-swipe';
import { PhotoIcon } from 'components/icons/photo';
import { CloseIcon } from 'components/icons/close';
import { ShareIcon } from 'components/icons/share';
import { SimpleArticle } from 'components/simple-article/simple-article';
import { NewsDateType } from 'components/news-block/news-date-type/news-date-type';

import { GALLERY_STUB_DATA, GALLERY_MORE_DATA } from './stub-data';

import './gallery.scss';

export class Gallery extends Component {
  state = {
    isOpen: false,
    currentIndex: 0,
    shouldShowPartners: false,
  }

  toggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
      currentIndex: 0,
      shouldShowPartners: false,
    }));
  }

  next = () => {
    const dataLength = this.props.data.length;
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

  prev = () => {
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

  render() {
    const { data } = this.props;
    const { isOpen, currentIndex, shouldShowPartners } = this.state;
    const currentPopupData = data[currentIndex];

    return (
      <div className="gallery">
        <Row className="gallery-widget">
          <Col xs={12}>
            <img src={data[0].image} alt="Preview large" className="gallery-widget-image-large" />
          </Col>
          <Col xs={12}>
            <Row className="gallery-widget-image-small-wrapper mx-0">
              <Col xs={6} className="gallery-widget-image-small-col gallery-widget-image-small-col-left">
                <img src={data[1].image} alt="Preview small" className="gallery-widget-image-small" />
              </Col>
              <Col xs={6} className="gallery-widget-image-small-col gallery-widget-image-small-col-right" onClick={this.toggle}>
                <div className="position-relative">
                  <img src={data[2].image} alt="Preview small" className="gallery-widget-image-small" />
                  <div className="gallery-widget-blackout d-flex align-items-center justify-content-center">
                    <PhotoIcon />
                    <span className="gallery-widget-blackout-more ml-2">+{data.length}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {isOpen &&
          <Swipe onSwipeLeft={this.next} onSwipeRight={this.prev} >
            <div className="gallery-popup">
              <Row className="gallery-popup-header align-items-center mx-0">
                <Col>
                  <Row>
                    <NewsDateType {...currentPopupData} />
                  </Row>
                </Col>
                <Col xs="auto" className="px-4">
                  <ShareIcon />
                </Col>
                <Col xs="auto" className="px-4">
                  <CloseIcon onClick={this.toggle} />
                </Col>
              </Row>
              <div className="gallery-popup-content">
                <h4 className="gallery-popup-title">{currentPopupData.title}</h4>
                {
                  shouldShowPartners ?
                    <div className="gallery-popup-partners">
                      <h5 className="gallery-popup-partners-title mb-3">смотрите также</h5>
                      {GALLERY_MORE_DATA.map((item, index) =>
                        <Fragment key={item.id}>
                          <SimpleArticle {...item} hideDate />
                          <div className="gallery-popup-partners-prefix">{item.count} фото</div>
                          {GALLERY_MORE_DATA.length - 1 !== index && <hr className="my-4" />}
                        </Fragment>
                      )}
                    </div> :
                    <Fragment>
                      <img className="gallery-popup-image" src={currentPopupData.image} alt="Content" />
                      <p className="gallery-popup-text">{currentPopupData.text}</p>
                    </Fragment>
                }
              </div>
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
