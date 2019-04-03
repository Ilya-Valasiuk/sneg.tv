import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from "react-slick";
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
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let reactSwipeEl;
var settings = {
  dots: false,
  arrows: false,
  // adaptiveHeight: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1
};

export class Gallery extends Component {
  state = {
    isOpen: false,
    isShareOpened: false,
  }

  toggle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
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
    const { isOpen, isShareOpened } = this.state;
    const maxPreviewImages = isMobile ? 3 : 5;
    const previewData = slides.slice(1, maxPreviewImages);
    console.log(previewData, isMobile)

    return (
      <div className="gallery">
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
          <div className="gallery-popup">
            {
              !isMobile &&
              <Fragment>
                <div className="gallery-popup-navigation gallery-popup-navigation-left" onClick={() => reactSwipeEl.slickPrev()}>
                  <LeftIcon3 />
                </div>
                <div className="gallery-popup-navigation gallery-popup-navigation-right" onClick={() => reactSwipeEl.slickNext()}>
                  <RightIcon3 />
                </div>
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
            {isShareOpened && <SharePopup />}
            <Slider
              className="gallery-popup-carousel"
              ref={el => (reactSwipeEl = el)}
              {...settings}
            >
              {slides.map(item => (
                <Row className="gallery-popup-content" key={item.id}>
                  <Col xs={12} className="gallery-popup-image">
                    <img className="img-fluid" src={item.image} alt="Content" />
                  </Col>
                  <Col xs={12}>
                    <p className="gallery-popup-text">{item.text}</p>
                  </Col>
                  {!isMobile &&
                    <Col xs={12}>
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
              <Row className="gallery-popup-partners">
                <Col xs={12}>
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
            </Slider>
          </div>
        }
      </div>
    )
  }
}

Gallery.defaultProps = {
  data: GALLERY_STUB_DATA,
};
