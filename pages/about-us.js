import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import styles from '../styles/about-us.module.css';
import headerStyles from '../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <header className={headerStyles.headerstyle}>
        <div className="main-header">
          <Container>
            <Row>
              <Col md={3}>
                <a href="./" className={headerStyles.logo}>
                <img alt="logo" src={'/images/seywing-logo.svg'} />
                </a>
              </Col>
              <Col md={6}>
                <div className={headerStyles.menuWrap}>
                  <ul className={headerStyles.menu}>
                    <li>
                      <Link href="" passHref>
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={3}>
                <ul className={headerStyles.buttonList}>
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

      <div className={styles.AboutSection}>
        <Container>
          <Row>
            <Col md={12}>
              <h1>About Us</h1>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
