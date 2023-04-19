import React from 'react'
import styles from "../../../styles/pricing.module.css";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { UNIQUE_FEATURES } from "../../../constants/unique-features.contant";
import Image from "next/image";

const UniqueFeatures = () => {
  return (
    <Container>
    <Row>
      <Col md="12" className="text-center">
        <div className={styles.wrapSectionHeading}>
          <h2>
            Our <span>Unique Features</span>
          </h2>
        </div>
      </Col>
      {UNIQUE_FEATURES.length &&
        UNIQUE_FEATURES.map((x) => (
          <>
            <Col>
              <div className={styles.wrapFeature}>
                <Image
                  alt={x.name}
                  src={`/images/${x.image}.svg`}
                  width={43}
                  height={48}
                />
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

export default UniqueFeatures