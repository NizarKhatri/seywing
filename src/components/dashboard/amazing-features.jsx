import React from 'react'
import styles from '../../../styles/pricing.module.css';
import { Container, Row, Col } from 'reactstrap';

const AmazingFeatures = () => {
  return (
    <Container>
          <Row>
            <Col md="5">
              <div className={styles.wrapSectionHeading}>
                <h2>
                  Discover <br className={styles.lineBreak}/> <span>Amazing Features</span>
                </h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>                
              </div>
            </Col>
            <Col md="7">
                <div className={styles.wrapAmazingImage}>
                  <img src="/images/discover-amazing.png" alt="Amazing" />
                </div>
            </Col>
          </Row>
        </Container>
  )
}

export default AmazingFeatures