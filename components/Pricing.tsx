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
        <PriceTable />
        <p className={`${open.className} ${styles.smallText}`}>
          All prices are approximate, total price will be discussed upon
          consultation. This includes property size above 700m2. If you have
          multiple spaces we can offer you a further discount.
        </p>
      </>
    </ContainerWrapper>
  );
};

export default Pricing;
