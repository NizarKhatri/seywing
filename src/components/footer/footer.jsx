import styles from '../../../styles/Footer.module.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Image from 'next/image';
import { FaGooglePlay, FaApple, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
        <Col md={3}>
        <div className={`${styles.logoSection} ${styles.responsiveFooter}`}>
          <img alt="logo" src={'/images/seywing-footer.svg'}  />
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
          <Col md={3} className={`${styles.companyPadLeft} ${styles.footerColRes}`}>
            <h5 className={styles.headingFooterColumn}>Company</h5>
            <ul className={styles.footerNaviagtion}>
              <li><a href="about-us">About Us</a></li>
              <li><a href="pricing">Pricing</a></li>
              <li><a href="blog">Blog</a></li>
              <li><a href="partner">Partners</a></li>
            </ul>
          </Col>
          <Col md={3} className={`${styles.paddingLeft} ${styles.footerColRes}`}>
            <h5 className={styles.headingFooterColumn}>Support</h5>
            <ul className={styles.footerNaviagtion}>
              <li><Link href="faq">FAQs</Link></li>
              <li><Link href="contact-us">Contact Us</Link></li>
              <li><Link href="terms-of-use">Term of Use</Link></li>
              <li><Link href="terms-of-sales">Term of Sales</Link></li>
              <li><Link href="privacy">Privacy</Link></li>
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
