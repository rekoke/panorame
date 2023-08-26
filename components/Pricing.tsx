import PriceTable from "./priceTable/PriceTable";
import styles from "../styles/Pricing.module.css";
import { Open_Sans } from "@next/font/google";
import ContainerWrapper from "./ContainerWrapper";

const open = Open_Sans({ subsets: ["latin"] });

const Pricing = () => {
  return (
    <ContainerWrapper
      sectionTitle="Pricing"
      className={styles.pricingContainer}
    >
      <>
        <div className={styles.pricingContainerTables}>
          <ul>
            <li>
              <PriceTable type="small" size={300} price={6000000} />
            </li>
            <li>
              <PriceTable type="large" size={700} price={9000000} />
            </li>
          </ul>
        </div>
        <p className={`${open.className} ${styles.discount}`}>
          2nd year renovation has a <span>30%</span> discount
        </p>
        <p className={`${open.className} ${styles.smallText}`}>
          <span>*</span>Properties larger than 700㎡ or multiple
          space/properties will be discussed upon consultation.
        </p>
      </>
    </ContainerWrapper>
  );
};

export default Pricing;
