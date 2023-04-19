import React from 'react'
import { EXCITING_FEATURES } from '../../../constants/exciting-features.constant';
import styles from '../../../styles/pricing.module.css';
import { Container, Row, Col } from 'reactstrap';

const ExcitingFeatures = () => {
  return (
    <Container>
      <Row>
        <Col md="12" className="text-center">
          <div className={styles.wrapSectionHeading}>
            <h2>
              Exciting <span>Features</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row>          
      {EXCITING_FEATURES.length &&
          EXCITING_FEATURES.map((x) => (
            <>
             <Col md="3">
                <div className={styles.wrapFeatures}>
                  <img src={`/images/${x.image}.svg`} alt="{x.name}" />
                  <h5>{x.name}</h5>
                  <p>{x.description}</p>
                </div>
              </Col>
            </>
          ))}
      </Row>
    </Container>
  )
}

export default ExcitingFeatures