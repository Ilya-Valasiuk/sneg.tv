import React, { Component, Fragment } from 'react';
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { CloseIcon } from 'components/icons/close';
import { ShareIcon } from 'components/icons/share';
import { LeftIcon3 } from 'components/icons/left-3';
import { RightIcon3 } from 'components/icons/right-3';
import { NewsDateType } from 'components/news-block/news-date-type/news-date-type';
import { SharePopup } from 'components/share-popup/share-popup';
import { SocialIcons } from 'components/shared/social-icons/social-icons';
import { SimpleArticle } from 'components/simple-article/simple-article';

import './gallery-popup.scss';

export class GalleryPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const items = this.props.data.slides;
    const nextIndex = this.state.activeIndex === items.length ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const items = this.props.data.slides;
    const nextIndex = this.state.activeIndex === 0 ? items.length : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { isMobile, data, isShareOpened } = this.props;
    const { slides, title, ...otherProps } = data;

    const renderSlides = slides.map(item => (
      <CarouselItem
        // className="gallery-popup-content"
        key={item.id}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        <Row className="gallery-popup-image">
          <Col xs={12}>
            <img className="img-fluid" src={item.image} alt="Content" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="gallery-popup-text">{item.text}</p>
          </Col>
        </Row>
        {!isMobile &&
          <Row className="gallery-popup-caption">
            <Col>
              <SocialIcons />
            </Col>
            <Col md="auto" className="gallery-popup-author">
              Фото: {item.author}
            </Col>
          </Row>
        }
      </CarouselItem>
    ));
    const partnersSlide = (
      <CarouselItem className="gallery-popup-partners">
        <h5 className="gallery-popup-partners-title mb-3">Смотрите также</h5>
        <Row>
          {this.props.partners.map((item, index) =>
            <Col key={item.id} xs={12} md={4}>
              <SimpleArticle {...item} hideDate />
              <div className="gallery-popup-partners-prefix">{item.count} фото</div>
              {isMobile && this.props.partners.length - 1 !== index && <hr className="my-4" />}
            </Col>
          )}
        </Row>
      </CarouselItem>
    );

    renderSlides.push(partnersSlide);
    // const slides = items.map((item) => {
    //   return (
    //     <CarouselItem
    //       onExiting={this.onExiting}
    //       onExited={this.onExited}
    //       key={item.src}
    //     >
    //       <img src={item.src} alt={item.altText} />
    //       <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    //     </CarouselItem>
    //   );
    // });

    return (
      <div className="gallery-popup">
        {
          !isMobile &&
          <Fragment>
            <div className="gallery-popup-navigation gallery-popup-navigation-left" onClick={this.previous}>
              <LeftIcon3 />
            </div>
            <div className="gallery-popup-navigation gallery-popup-navigation-right" onClick={this.next}>
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
        <h4 className="gallery-popup-title">{title}</h4>
        {isShareOpened && <SharePopup />}
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          autoPlay={false}
        >
          {renderSlides}
        </Carousel>
      </div>
    );
  }
}

// {isOpen && <GalleryPopup data={data} isMobile={isMobile} isShareOpened={isShareOpened} partners={GALLERY_MORE_DATA} />}