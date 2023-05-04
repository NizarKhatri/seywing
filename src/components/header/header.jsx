import Link from 'next/link';
import styles from '../../../styles/Header.module.css';
import { Container, Row, Col,Button } from 'reactstrap';
import Image from 'next/image';

export const Header = () => {
  return (

    <header className={styles.headerstyle}>
    <div className="main-header">
      <Container>
        {/* <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <Row>
          <Col md={3}>
            <a href="./" className={styles.logo}>
              <img alt="logo" src={'/images/seywing-logo.svg'} />
            </a>
          </Col>
          <Col md={6}>
            <div className={styles.menuWrap}>
              <ul className={styles.menu}>
                <li><Link href="/" passHref>About Us</Link></li>
                <li><Link href="/pricing" passHref>Pricing</Link></li>
                <li><Link href="/" passHref>Partner with Us</Link></li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <ul className={styles.buttonList}>
              <li>
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              </li>
              <li>
              <Link href="/signup">
                <Button>Register</Button>
              </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  </header>

    
  );
};
