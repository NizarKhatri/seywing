import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import styles from "../../../styles/pricing.module.css";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import { icons } from "react-icons";
import Image from "next/image";
import Link from 'next/link';

const BoostBanner = () => {
  return (
    <Container>
          <Row>
            <Col md="5">
              <div className={styles.wrapBanner}>
                <h1>
                  <span>Boost</span> your business <br className={styles.lineBreak}/>with <span>Seywing!</span>
                </h1>
                <Link href="/signup">
                <Button className={`${styles.signUpButton} ${styles.responsiveBannerButton}`}>
                  Sign Up
                  <FaLongArrowAltRight />
                </Button>
                </Link>
              </div>
            </Col>
            <Col md="7">
              <div className={styles.wrapBannaerImage}>
                <img src="/images/boost-banner.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
  )
}

export default BoostBanner