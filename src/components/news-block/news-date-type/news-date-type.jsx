import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { Row, Col } from "reactstrap";
import { ArticleBadge } from 'components/article-badge/article-badge';
import { ViewIcon } from 'components/icons/view';
import { CommentsIcon } from 'components/icons/comments'

import "./news-date-type.scss";

export class NewsDateTypeUI extends Component {
  redirect = (e) => {
    e.preventDefault();

    this.props.history.push(this.props.typeLink);
  }

  render() {
    const { date, type, className, subType, showViews, showCommnets, viewCount, commentsCount } = this.props;

    return (
      <Col
        xs={12}
        className={classnames("news-date-type py-2 d-flex", className)}
        onClick={this.redirect}
      >
        <Row>
          <Col xs={12} md={subType ? "" : 12}>
            <span className="date text-uppercase mr-3">{date}</span>
            <span className="type text-uppercase font-weight-500">
              {type}
            </span>
            {showViews && <span className="views ml-2"><ViewIcon /> {viewCount}</span>}
            {showCommnets && <span className="comments ml-2"><CommentsIcon /> {commentsCount}</span>}
          </Col>
          {subType ? <Col xs={12} md="auto"><ArticleBadge title={subType} /></Col> : null}
        </Row>
      </Col>
    );
  }
}

NewsDateTypeUI.defaultProps = {
  className: "align-items-center",
  showViews: false,
  showCommnets: false,
  viewCount: 0,
  commentsCount: 0,
};


export const NewsDateType = withRouter(NewsDateTypeUI);
