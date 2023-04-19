import React from "react";
import styles from "../../../styles/pricing.module.css";
import BoostBanner from "./boost-banner";
import UniqueFeatures from "./unique-features";
import UniquePlans from "./unique-plans";
import Categories from "../dashboard/categories";
import Locations from "./locations";

const PricingComponent = () => {
  return (
    <>
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

export default PricingComponent;
