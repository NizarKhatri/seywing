import React from 'react'
import styles from '../../../styles/pricing.module.css';
import { Container, Row, Col } from 'reactstrap';
import { PRICING_CATEGORIES } from '../../../constants/pricing-categories.contant';
import Image from "next/image";

const Categories = () => {
  return (
    <Container>
          <Row>
            <Col md="12" className="text-center">
              <div className={styles.wrapSectionHeading}>
                <h2>
                  Explore <span>Categories</span>
                </h2>
              </div>
            </Col>
            <Col md="12">
              <div className={styles.wrapCategoriesList}>
                <ul>
                  {PRICING_CATEGORIES.length &&
                    PRICING_CATEGORIES.map((x) => (
                      <>
                        <li>
                          <div className={styles.wrapCatImg}>
                            <Image
                              alt={x.name}
                              src={`/images/${x.image}.svg`}
                              width={42}
                              height={42}
                            />
                          </div>
                          <h4>{x.name}</h4>
                        </li>
                      </>
                    ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
  )
}

export default Categories