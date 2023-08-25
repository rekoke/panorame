import React from "react";
import styles from "../styles/ContainerWrapper.module.css";
import { camelize } from "../utils/helpers";

type Props = {
  sectionTitle: string;
  children: JSX.Element;
  className: string;
};

const ContainerWrapper = ({ sectionTitle, className, children }: Props) => {
  const idFormatted = camelize(sectionTitle);
  return (
    <div id={idFormatted} className={`${styles.containerWrapper} ${className}`}>
      <h2>{sectionTitle}</h2>
      <div className={styles.child}>{children}</div>
    </div>
  );
};

export default ContainerWrapper;
