import React from 'react'
import styles from '../../../styles/pricing.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { FaLongArrowAltRight } from "react-icons/fa";

const PartnerWithUs = () => {
  return (
    <Container>
          <Row>
          <Col md="7">
                <div className={styles.wrapAmazingImage}>
                  <img src="images/boost-banner.png" alt="Banner" />
                </div>
            </Col>
            <Col md="5" className="text-left">
              <div className={styles.wrapSectionHeading}>
                <h2>
                    <span>Partner</span> With Us 
                </h2>
                <p>Arcu pellentesque donec porttitor sit suspendisse eget turpis et. Elementum eu cras tempus hac tristique neque lacus nunc feugiat.</p>                
                <Button className={styles.signUpButton}>
                  Learn More
                  <FaLongArrowAltRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
  )
}

export default PartnerWithUs