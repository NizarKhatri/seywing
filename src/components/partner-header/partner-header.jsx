import React from 'react'
import headerStyles from "../../../styles/Header.module.css";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import Link from 'next/link';

const PartnerHeader = () => {
  return (
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
                  {/* <ul className={headerStyles.menu}>
                    <li>
                      <Link href="" passHref>
                        Pricing
                      </Link>
                    </li>
                  </ul> */}
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
  )
}

export default PartnerHeader