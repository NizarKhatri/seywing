import PartnerHeader from '../src/components/partner-header/partner-header';
import styles from '../styles/general.module.css';
import React from 'react'
import { Col, Container, Row } from 'reactstrap';

const TermsOfUse = () => {
  return (
    <>
    <PartnerHeader />

      <div className={styles.Section}>
        <Container>
          <Row>
            <Col md={12}>
              <h1>FAQ</h1>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
            </Col>
          </Row>
        </Container>
      </div>
      </>
  );
}

export default TermsOfUse