import React from "react";
import Link from "next/link";
import styles from "../../../styles/pricing.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Container, Row, Col, Button } from "reactstrap";
import { icons } from "react-icons";
import Image from "next/image";
import { UNIQUE_FEATURES } from "../../../constants/unique-features.contant";

const PricingComponent = () => {
    console.log(UNIQUE_FEATURES);
  return (
    <>
      <div className={styles.sectionBanner}>
        <Container>
          <Row>
            <Col md="5">
              <div className={styles.wrapBanner}>
                <h1>
                  <span>Boost</span> your business with <span>Seywing!</span>
                </h1>
                <Button>
                  Sign Up
                  <FaLongArrowAltRight />
                </Button>
              </div>
            </Col>
            <Col md="7">
              <div className={styles.wrapBannaerImage}>{/* <Image  /> */}</div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.sectionFeature}>
        <Container>
          <Row>
            <Col md="12">
              <div className={styles.wrapSectionHeading}>
                <h2>
                  Our <span>Unique Features</span>
                </h2>
              </div>
            </Col>
            {UNIQUE_FEATURES.length && UNIQUE_FEATURES.map(x=> <>
              <Col>
                <div className={styles.wrapFeature}>
                        <Image
                        alt={x.name}
                        src={`/images/${x.image}.svg`}
                        width={30}
                        height={30}
                        />
                        <h5>{x.name}</h5>
                        <p>{x.description}</p>
                    </div>
              </Col>
              </>
                )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PricingComponent;
