import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { STUB_DATA } from './stub-data';

import './rubrics.scss';

function RubricsSection({ sectionData }) {
  return (
    <div>
      <Row className="rubrics-header align-items-center mb-3">
        <Col xs="12" md="auto">{sectionData.title}</Col>
        <Col className="d-none d-md-block"><hr /></Col>
      </Row>
      <Row className="mb-4 mb-md-5">
        {sectionData.links.map(item => (
          <Col xs={6} md={3} key={item.id}>
            <Link className="rubrics-link" to={item.link || '#'}>{item.name}</Link>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export function Rubrics() {
  return (
    <div className="rubrics">
      <RubricsSection sectionData={STUB_DATA.rubrics} />
      <RubricsSection sectionData={STUB_DATA.actual} />
      <RubricsSection sectionData={STUB_DATA.archived} />
    </div>
  );
}