import React from 'react'
import styles from '../../../styles/pricing.module.css';
import { Container, Row, Col } from 'reactstrap';
import { BLOGS } from '../../../constants/blogs.constant';

const Blogs = () => {
  return (
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
          {BLOGS.length &&
              BLOGS.map((x) => (
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
  )
}

export default Blogs