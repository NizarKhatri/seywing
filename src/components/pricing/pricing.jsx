import React from "react";
import Link from "next/link";
import styles from "../../../styles/pricing.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  Input,
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { icons } from "react-icons";
import Image from "next/image";
import { UNIQUE_FEATURES } from "../../../constants/unique-features.contant";
import { PRICING_CATEGORIES } from "../../../constants/pricing-categories.contant";
import { UNIQUE_PLANS } from "../../../constants/unique-plans.constant";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { PRICING_LOCATION } from "@/constants/pricing-location.constant";
import { EXCITING_FEATURES } from "@/constants/pricing-excitingfeatures.constant";
import { PRICING_BLOG } from "@/constants/pricing-blog.constant";
import { PROFESSIONAL_COMM } from "@/constants/professional-communication.constant";

const PricingComponent = () => {
  console.log(UNIQUE_FEATURES);
  return (
    <>
      <div className={styles.sectionBanner}>
        <Container>
          <Row>
            <Col md="5">
              <div className={styles.wrapBanner}>
                <h1>
                  <span>Boost</span> your business <br className={styles.lineBreak}/>with <span>Seywing!</span>
                </h1>
                <Button className={styles.signUpButton}>
                  Sign Up
                  <FaLongArrowAltRight />
                </Button>
              </div>
            </Col>
            <Col md="7">
              <div className={styles.wrapBannaerImage}>
                <img src="/images/boost-banner.png" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.sectionFeature}>
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <div className={styles.wrapSectionHeading}>
                <h2>
                  Our <span>Unique Features</span>
                </h2>
              </div>
            </Col>
            {UNIQUE_FEATURES.length &&
              UNIQUE_FEATURES.map((x) => (
                <>
                  <Col>
                    <div className={styles.wrapFeature}>
                      <Image
                        alt={x.name}
                        src={`/images/${x.image}.svg`}
                        width={43}
                        height={48}
                      />
                      <h5>{x.name}</h5>
                      <p>{x.description}</p>
                    </div>
                  </Col>
                </>
              ))}
          </Row>
        </Container>
      </div>
      <div className={styles.sectionPricing}>
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
                      onChange=''
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
                  <Col md="4">
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
                                      <AiFillCheckCircle
                                        size={24}
                                        color="#01A652"
                                      />
                                    </span>
                                    <p>{y.name}</p>
                                  </li>
                                )}
                                {!y.isEnabled && (
                                  <li>
                                    <span>
                                      <AiFillCloseCircle
                                        size={24}
                                        color="#D1D6DB"
                                      />
                                    </span>
                                    <p>{y.name}</p>{" "}
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
      </div>
      <div className={styles.sectionCategories}>
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
      </div>
      <div className={styles.location}>
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <div className={styles.wrapSectionHeading}>
              <h2>
                Supported <span>Locations</span>
              </h2>
              </div>
            </Col>
          </Row>
          <Row>
          {PRICING_LOCATION.length &&
          PRICING_LOCATION.map((x) => (
            <>
            <Col md="3">
              <div className={styles.wrapFlagBox}>
                <div className={styles.wrapContent}>
                  <Image
                    alt={x.name}
                    src={`/images/${x.image}.svg`}
                    width={72}
                    height={52}
                  />
                  <h4>{x.name}</h4>
                </div>
                { x.isComing &&
                <div className={styles.wrapOverlayDefault}>
                  <span>Coming Soon</span>
                </div>
                }
              </div>
            </Col>
            </>
              ))}
            <Col md="12" className="text-center">
              <div className={styles.wrapLocButton}>
                <Button className={styles.signUpButton}>
                   Sign Up
                  <FaLongArrowAltRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.sectionExcitingFeatures}>
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <div className={styles.wrapSectionHeading}>
                <h2>
                  Exciting <span>Features</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row>          
          {UNIQUE_FEATURES.length &&
              EXCITING_FEATURES.map((x) => (
                <>
                 <Col md="3">
                    <div className={styles.wrapFeatures}>
                      <img src={`/images/${x.image}.svg`} alt="{x.name}" />
                      <h5>{x.name}</h5>
                      <p>{x.description}</p>
                    </div>
                  </Col>
                </>
              ))}
          </Row>
        </Container>
      </div>
      <div className={styles.sectionDiscoverAmazing}>
        <Container>
          <Row>
            <Col md="5">
              <div className={styles.wrapSectionHeading}>
                <h2>
                  Discover <br className={styles.lineBreak}/> <span>Amazing Features</span>
                </h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>                
              </div>
            </Col>
            <Col md="7">
                <div className={styles.wrapAmazingImage}>
                  <img src="/images/boost-banner.png" alt="Banner" />
                </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.sectionPartner}>
        <Container>
          <Row>
          <Col md="7">
                <div className={styles.wrapAmazingImage}>
                  <img src="/images/discover-amazing.png" alt="Banner" />
                </div>
            </Col>
            <Col md="5" className="text-left">
              <div className={styles.wrapSectionHeading}>
                <h2>
                    <span>Partner</span> With Us 
                </h2>
                <p>Arcu pellentesque donec porttitor sit suspendisse eget turpis et. Elementum eu cras tempus hac tristique neque lacus nunc feugiat.</p>                
                <Button className={styles.signUpButton}>
                  Learn More
                  <FaLongArrowAltRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.sectionBlog}>
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <div className={styles.wrapSectionHeading}>
                  <h2>
                    Our <span>blog</span>
                  </h2>
                  <p>Creativity is a highfalutin word for the work I have to do<br className={styles.lineBreak}/> between now and Tuesday.</p>                
                </div>
            </Col>
          </Row>
          <Row>
          {PRICING_BLOG.length &&
              PRICING_BLOG.map((x) => (
                <>
            <Col md="4">
              <div className={styles.wrapBlogBox}>
                <img src={`/images/${x.image}.svg`} alt="" />
                <div className={styles.wrapTextBlog}>
                  <h4>{x.name}</h4>
                  <p>{x.description}</p>
                  <div className={styles.wrapAuthDetail}>
                    <img src={`/images/${x.authorImage}.svg`} alt="" />
                    <ul>
                      <li>
                        <h6>{x.authorName}</h6>
                        <p>{x.publishDate} · <span>{x.lastRead}</span></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            </>
              ))}
          </Row>
        </Container>
      </div>
      <div className={styles.sectionProfessional}>
        <Container>
            <Row>
              <Col md="10" className="mx-auto">
                <div className={styles.wrapProfessionalInner}>
                  <Row className="text-center">
                    <Col md="12">
                        <div className={styles.wrapSectionHeading}>
                          <h2>
                            Unlock your <span>professional<br className={styles.lineBreak}/> communications</span>
                          </h2>
                        </div>
                    </Col>
                  </Row>
                  <div className={styles.counterPad}>
                    <Row>
                    {PROFESSIONAL_COMM.length &&
                  PROFESSIONAL_COMM.map((x) => (
                    <>
                      <Col md="4">
                        <div className={styles.wrapCount}>
                          <h3>{x.number}</h3>
                          <p>{x.description}</p>
                        </div>
                      </Col>
                      </>
                  ))}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div>
    </>
  );
};

export default PricingComponent;
