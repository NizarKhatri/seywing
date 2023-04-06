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
import { TABS } from '../../../constants/tabs.constant';
import LoginComponent from './login';
import SignupComponent from './signup';

const AuthComponent = ({selectedTab}) => {
  const [activeTab, setActiveTab] = useState(selectedTab);

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
              className={`${styles.navLink} ${activeTab === TABS.login ? `${styles.active}` : ''}`}
              onClick={() => {
                toggle(TABS.login);
              }}
            >
              LOGIN
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`${styles.navLink} ${activeTab === TABS.signup ? `${styles.active}` : ''}`}
              onClick={() => {
                toggle(TABS.signup);
              }}
            >
              SIGN UP
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId={TABS.login}>
            <LoginComponent/>
          </TabPane>
          <TabPane tabId={TABS.signup}>
            <SignupComponent />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default AuthComponent;
