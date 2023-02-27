import MyIframe from "./exampleIframe/MyIframe";
import { useState } from "react";
import { MatterportLinks } from "../store";
import styles from "../styles/Examples.module.css";
import ContainerWrapper from "./ContainerWrapper";

const Examples = () => {
  const [matterportLinks, setMatterportLinks] = useState(MatterportLinks);
  return (
    <ContainerWrapper
      sectionTitle="Gallery"
      className={styles.examplesContainer}
    >
      <ul>
        {matterportLinks.map((link) => {
          return (
            <li key={link.key}>
              <MyIframe src={link.url} />
            </li>
          );
        })}
      </ul>
    </ContainerWrapper>
  );
};

export default Examples;
