import React from 'react';
import styles from '../../../styles/pricing.module.css';
import { Container, Row, Col } from 'reactstrap';
import { PRICING_LOCATION } from '../../../constants/pricing-location.constant';
import Image from "next/image";

const Locations = () => {
  return (
    <Container>
          <Row>
            <Col md="12" className="text-center">
              <div className={styles.wrapSectionHeading}>
              <h2>
                Supported <span>Locations</span>
              </h2>
              </div>
            </Col>
          </Row>
          <Row>
          {PRICING_LOCATION.length &&
          PRICING_LOCATION.map((x) => (
            <>
            <Col md="3">
              <div className={styles.wrapFlagBox}>
                <div className={styles.wrapContent}>
                  <Image
                    alt={x.name}
                    src={`/images/${x.image}.svg`}
                    width={72}
                    height={72}
                  />
                  <h4>{x.name}</h4>
                </div>
                { x.isComing &&
                <div className={styles.wrapOverlayDefault}>
                  <span>Coming Soon</span>
                </div>
                }
              </div>
            </Col>
            </>
              ))}
          </Row>
        </Container>
  )
}

export default Locations