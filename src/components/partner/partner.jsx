import React from 'react';
import styles from '../../../styles/pricing.module.css';
import headerStyles from '../../../styles/Header.module.css';
import BoostBanner from './boost-banner';
import UniqueFeatures from './unique-features';
import UniquePlans from './unique-plans';
import Categories from '../dashboard/categories';
import Locations from './locations';
import { Button, Col, Container, Row } from 'reactstrap';
import Link from 'next/link';
import Image from 'next/image';

const PartnerComponent = () => {
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
      <div className={styles.sectionBanner}>
        <BoostBanner />
      </div>
      <div className={styles.sectionFeature}>
        <UniqueFeatures />
      </div>
      <div className={styles.sectionPricing}>
        <UniquePlans />
      </div>
      <div className={styles.sectionCategories}>
        <Categories />
      </div>
      <div className={styles.location}>
        <Locations />
      </div>
    </>
  );
};

export default PartnerComponent;
