import React from 'react'
import { FaApple, FaGooglePlay, FaLongArrowAltRight } from "react-icons/fa";
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
                <div className={styles.bannerButtonDownload}>
                <Button outline className={`${styles.btnFtr} ${styles.googlePlayBtn}`}>
                  <div className={styles.downloadBtn}>
                  <FaGooglePlay size={25} className={styles.ftrIcon} />
                    <span>
                      Download on
                      <strong>Google Play</strong>
                    </span> 
                  </div>
                </Button>
                <Button outline className={`${styles.btnFtr} ${styles.appleStoreBtn}`} >
                  <div className={styles.downloadBtn}>
                  <FaApple size={30} className={styles.ftrIcon} />
                    <span>
                      Download on
                      <strong>App Store</strong>
                    </span> 
                  </div>
                </Button>
              </div>
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