import styles from "../../styles/PriceTable.module.css";

const PriceTable = () => {
  return (
    <div className={styles.priceTable}>
      <div className={styles.priceTableInner}>
        <h1>Property size up to 300m2</h1>
        <div className={styles.priceTableInsideContainer}>
          <div>
            <h2>6 months</h2>
            <span>From</span>
            <span>3M IDR</span>
            <span>200 USD</span>
          </div>
          <div>
            <h2>1year</h2>
            <span>From</span>
            <span>4M IDR</span>
            <span>262 USD</span>
          </div>
        </div>
      </div>
      <div className={styles.priceTableInner}>
        <h1>Property size up to 700m2</h1>
        <div className={styles.priceTableInsideContainer}>
          <div>
            <h2>6 months</h2>
            <span>From</span>
            <span>5M IDR</span>
            <span>200 USD</span>
          </div>
          <div>
            <h2>1year</h2>
            <span>From</span>
            <span>6M IDR</span>
            <span>262 USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceTable;
