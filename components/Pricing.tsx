import { useState } from "react";
import PriceTable from "./priceTable/PriceTable";
import styles from "../styles/Pricing.module.css";
import { Open_Sans } from "@next/font/google";
import ContainerWrapper from "./ContainerWrapper";
import { useInView } from "react-intersection-observer";

const open = Open_Sans({ subsets: ["latin"] });

const Pricing = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  });

  const scroll = inView ? "" : styles.secondSlide;

  return (
    <ContainerWrapper
      sectionTitle="Pricing"
      className={styles.pricingContainer}
    >
      <div className={styles.pricingWrapper}>
        <div className={styles.pricingContainerTables}>
          <ul>
            <li ref={ref}>
              <PriceTable type="small" size={300} price={6000000} />
            </li>
            <li>
              <PriceTable type="large" size={700} price={9000000} />
            </li>
          </ul>
        </div>
        <div
          className={`${styles.scrollBarPrices} ${styles.onlyMobile} ${scroll}`}
        ></div>
        <p className={`${open.className} ${styles.discount}`}>
          2nd year renovation has a <span>30%</span> discount
        </p>
        <p className={`${open.className} ${styles.smallText}`}>
          <span>*</span>Properties larger than 700㎡ or multiple
          space/properties will be discussed upon consultation.
        </p>
      </div>
    </ContainerWrapper>
  );
};

export default Pricing;
