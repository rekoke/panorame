import styles from "../../styles/PriceTable.module.css";
import { Open_Sans } from "@next/font/google";

const open = Open_Sans({ subsets: ["latin"] });

interface Props {
  type: string;
  size: number;
  price: number;
}

const PriceTable: React.FC<Props> = ({ type, size, price }) => {
  return (
    <div className={styles.priceTableContainer}>
      <h3 className={open.className}>{type} properties</h3>
      <span className={`${open.className} ${styles.priceTableSubTitle}`}>
        up to {size} ㎡
      </span>
      <span className={`${open.className} ${styles.priceTablePrice}`}>
        IDR: {price.toLocaleString()}
        <span>/year</span>
      </span>
    </div>
  );
};
export default PriceTable;
