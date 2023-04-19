import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "../../../styles/pricing.module.css";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const Banner = () => {
  return (
    <Container>
          <Row>
            <Col md="5">
              <div className={styles.wrapBanner}>
                <h1>
                  Start <span>Saving</span> <br className={styles.lineBreak}/>Money Today!
                </h1>
                <h6>
                  One app to find amazing offers and discounts
                </h6>
                <Button className={styles.signUpButton}>
                  Sign Up
                  <FaLongArrowAltRight />
                </Button>
              </div>
            </Col>
            <Col md="7">
              <div className={styles.wrapBannaerImage}>
                <img src="/images/banner.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
  )
}

export default Banner