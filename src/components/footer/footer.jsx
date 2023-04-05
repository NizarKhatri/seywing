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
        <div className="d-grid gap-2 align-items-center">
          <Image alt="logo" src={'/images/SeywingFooter.png'} width={167} height={22} />
          <div>
            <p className='m-0'>Making the world a better place through constructing elegant hierarchies</p>
          </div>
          <div className={styles.socialMediaContainer}>
            <FaTwitter size={32} color="#FFFFFF" />
            <FaFacebook size={32} color="#FFFFFF" />
            <FaInstagram size={32} color="#FFFFFF" />
            <FaGithub size={32} color="#FFFFFF" />
        </div>
        </div>
        </Col>
          <Col md={3}>
            <h5 className={styles.heading}>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className={styles.footerAnchor}>About Us</a></li>
              <li><a href="#" className={styles.footerAnchor}>Pricing</a></li>
              <li><a href="#" className={styles.footerAnchor}>Blog</a></li>
              <li><a href="#" className={styles.footerAnchor}>Partners</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className={styles.heading}>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className={styles.footerAnchor}>FAQ's</a></li>
              <li><a href="#" className={styles.footerAnchor}>Contact Us</a></li>
              <li><a href="#" className={styles.footerAnchor}>Term of Use</a></li>
              <li><a href="#" className={styles.footerAnchor}>Term of Sales</a></li>
              <li><a href="#" className={styles.footerAnchor}>Privacy</a></li>
            </ul>
          </Col>
          <Col md={3}>
          <div className="d-flex align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <Button outline className={`${styles.btnFtr} me-2 text-wrap text-break`} size='md'>
                <div className="d-flex align-items-center">
                <FaGooglePlay size={24} className="me-2" />
                  Download on Google Play
                </div>
              </Button>
              <Button outline className={`${styles.btnFtr} me-2 text-wrap text-break mt-3`} size='md'>
                <div className="d-flex align-items-center">
                <FaApple size={24} className="me-2" />
                  Download on App Store
                </div>
              </Button>
            </div>
          </div>
        </Col>
        </Row>
      </Container>
    </footer>
  );
};
