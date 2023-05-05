import React from 'react';
import styles from '../../../styles/pricing.module.css';
import BoostBanner from './boost-banner';
import UniqueFeatures from './unique-features';
import UniquePlans from './unique-plans';
import Categories from '../dashboard/categories';
import Locations from './locations';
import PartnerHeader from '../partner-header/partner-header';

const PartnerComponent = () => {
  return (
    <>
      <div>
        <PartnerHeader />
      </div>
      <div className={styles.sectionBanner}>
        <BoostBanner />
      </div>
      <div className={`${styles.sectionFeature} ${styles.sectionFeaturePadAdjustment}`}>
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
