import React from 'react';
import { Row, Col } from 'reactstrap';

export function FooterLinks({ title, items }) {
  return (
    <Row noGutters>
      <Col xs={12} className="mb-3"><span className="foonter-links-title">{title}</span></Col>
      {items.map(({ link, title }) => <Col xs={12} className="mb-2"><a href={link} className="text-white">{title}</a></Col>)}
    </Row>
  );
}