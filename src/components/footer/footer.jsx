import styles from '../../../styles/Footer.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Image from 'next/image';
import { FaGooglePlay, FaApple, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
        <Col md={3}>
        <div className={`${styles.logoSection} ${styles.responsiveFooter}`}>
          <Image alt="logo" src={'/images/seywing-footer.png'} width={167} height={22} />
          <p>Making the world a better place through constructing elegant hierarchies</p>
          <div className={styles.socialMediaContainer}>
            <ul>
              <li><FaTwitter size={24} color="#FFFFFF" /></li>
              <li><FaFacebook size={24} color="#FFFFFF" /></li>
              <li><FaInstagram size={24} color="#FFFFFF" /></li>
              <li><FaGithub size={24} color="#FFFFFF" /></li>
            </ul>
        </div>
        </div>
        </Col>
          <Col md={3} className={styles.companyPadLeft}>
            <h5 className={styles.headingFooterColumn}>Company</h5>
            <ul className={styles.footerNaviagtion}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </Col>
          <Col md={3} className={styles.paddingLeft}>
            <h5 className={styles.headingFooterColumn}>Support</h5>
            <ul className={styles.footerNaviagtion}>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Term of Use</a></li>
              <li><a href="#">Term of Sales</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </Col>
          <Col md={3}>
          <div className="">
            <div className={styles.btnAlignment}>
              <Button outline className={styles.btnFtr}>
                <div className={styles.downloadBtn}>
                <FaGooglePlay size={25} className={styles.ftrIcon} />
                  <span>
                    Download on
                    <strong>Google Play</strong>
                  </span> 
                </div>
              </Button>
              <Button outline className={styles.btnFtr} >
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
        <Col md={12}>
          <div className={styles.copyright} >
            <p>© 2020 Dlex, Inc. All rights reserved</p>
          </div>
        </Col>
        </Row>
      </Container>
    </footer>
  );
};
