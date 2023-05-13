import React from 'react';
import styles from '../../../styles/pricing.module.css';
import { Input, Container, Row, Col, Button } from 'reactstrap';
import { UNIQUE_PLANS } from '../../../constants/unique-plans.constant';
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const UniquePlans = () => {
  return (
    <Container>
      <Row>
        <Col md="8" className={styles.headFix}>
          <div className={styles.wrapSectionHeading}>
            <h2>
              Explore <span>Unique plans</span>
            </h2>
          </div>
        </Col>
        <Col md="4">
          <div className={styles.wrapPricingSelect}>
            <Input
              className={styles.select}
              type="select"
              name="select"
              id="exampleSelect"
              onChange=""
            >
              <option value="" disabled hidden>
                Business Type
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Input>
          </div>
        </Col>
      </Row>
      <Row>
        {UNIQUE_PLANS.length &&
          UNIQUE_PLANS.map((x) => (
            <>
              <Col xl="4">
                <div className={styles.wrapPricingCol}>
                  <div className={styles.wrapNameRow}>
                    <div className={styles.wrapNameNumber}>
                      <h3>
                        {x.name} {x.isPopular && <span>Popular </span>}
                      </h3>
                      <h5>{x.services} Services</h5>
                    </div>
                    <div className={styles.wrapPackagePrice}>
                      <h2>{x.price}</h2>
                    </div>
                  </div>
                  <div className={styles.wrapPackageList}>
                    <ul>
                      {x.features.length &&
                        x.features.map((y) => (
                          <>
                            {y.isEnabled && (
                              <li>
                                <span>
                                  <AiFillCheckCircle size={24} color="#01A652" />
                                </span>
                                <p>{y.name}</p>
                              </li>
                            )}
                            {!y.isEnabled && (
                              <li>
                                <span>
                                  <AiFillCloseCircle size={24} color="#D1D6DB" />
                                </span>
                                <p>{y.name}</p>{' '}
                              </li>
                            )}
                          </>
                        ))}
                    </ul>
                  </div>
                  <Button>Choose Plan</Button>
                  <a href="">Terms & Conditions</a>
                </div>
              </Col>
            </>
          ))}
      </Row>
    </Container>
  );
};

export default UniquePlans;
