import React from 'react';
import styles from '../../../styles/pricing.module.css';
import Banner from './banner';
import ExcitingFeatures from './exciting-features';
import AmazingFeatures from './amazing-features';
import PartnerWithUs from './partner-with-us';
import Blogs from './blogs';
import Communications from './communications';
import Categories from './categories';
import Locations from './locations';
import { Header } from '../header/header';

const DashboardComponent = () => {
  return (
    <>
      <Header />
      <div className={styles.sectionBanner}>
        <Banner />
      </div>
      <div className={styles.sectionExcitingFeatures}>
        <ExcitingFeatures />
      </div>
      <div className={styles.sectionCategories}>
        <Categories />
      </div>
      <div className={styles.sectionDiscoverAmazing}>
        <AmazingFeatures />
      </div>
      <div className={styles.sectionPartner}>
        <PartnerWithUs />
      </div>
      <div className={styles.sectionBlog}>
        <Blogs />
      </div>
      <div className={styles.sectionProfessional}>
        <Communications />
      </div>
      <div className={styles.locationDashboard}>
        <Locations />
      </div>
    </>
  );
};

export default DashboardComponent;
