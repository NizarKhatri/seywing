import React from 'react'
import styles from '../../../styles/pricing.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { PROFESSIONAL_COMM } from '../../../constants/communication.constant';

const Communications = () => {
  return (
    <Container>
            <Row>
              <Col md="10" className="mx-auto">
                <div className={styles.wrapProfessionalInner}>
                  <Row className="text-center">
                    <Col md="12">
                        <div className={styles.wrapSectionHeading}>
                          <h2>
                            Unlock your <span>professional<br className={styles.lineBreak}/> communications</span>
                          </h2>
                        </div>
                    </Col>
                  </Row>
                  <div className={styles.counterPad}>
                    <Row>
                    {PROFESSIONAL_COMM.length &&
                  PROFESSIONAL_COMM.map((x) => (
                    <>
                      <Col md="4">
                        <div className={`${styles.wrapCount} ${styles[`${x.class}`]}`} style={{color:`${x.color}`}}>
                          <h3>{x.number}</h3>
                          <p>{x.description}</p>
                        </div>
                      </Col>
                      </>
                  ))}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
        </Container>


  )
}

export default Communications