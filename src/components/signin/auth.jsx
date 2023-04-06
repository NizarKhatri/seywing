import React, { useState } from 'react';
import styles from '../../../styles/auth.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Login from './login';
import Signup from './signup';

const AuthComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

 

  return (
    <div className={styles.container}>
      {/* <Image alt="logo" src={'/images/star.png'} width={307} height={295} className={styles.star} /> */}
      <div className={styles.leftColumn}>
        <h2 className={styles.heading}>Features</h2>
        <p className={styles.subHeading}>
          Risus nisl luctus ultricies sit ac aliquet massa elit. Aenean sem urna turpis lacinia.
        </p>
        <div className={styles.points}>
          <p>
            <span>
              <AiFillCheckCircle size={22} color="#F47D31" />
            </span>
            Commodo elementum pulvinar mauris etiam.
          </p>
          <p>
            <span>
              <AiFillCheckCircle size={22} color="#F47D31" />
            </span>
            Enim a facilisis mauris quis porta.
          </p>
          <p>
            <span>
              <AiFillCheckCircle size={22} color="#F47D31" />
            </span>
            Purus posuere urna vitae eu sit massa nec.
          </p>
          <p>
            <span>
              <AiFillCheckCircle size={22} color="#F47D31" />
            </span>
            Fermentum quis pretium id hac.
          </p>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Nav tabs className={styles.nav}>
          <NavItem>
            <NavLink
              className={`${styles.navLink} ${activeTab === 'tab1' ? `${styles.active}` : ''}`}
              onClick={() => {
                toggle('tab1');
              }}
            >
              LOGIN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`${styles.navLink} ${activeTab === 'tab2' ? `${styles.active}` : ''}`}
              onClick={() => {
                toggle('tab2');
              }}
            >
              SIGN UP
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="tab1">
            <Login/>
          </TabPane>
          <TabPane tabId="tab2">
            <Signup />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default AuthComponent;
