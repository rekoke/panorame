import styles from "../styles/VirtualTours.module.css";
import { Open_Sans } from "@next/font/google";
import ContainerWrapper from "./ContainerWrapper";
import { Link } from "react-scroll";

const open = Open_Sans({ subsets: ["latin"] });

const VirtualTours = () => {
  return (
    <ContainerWrapper
      sectionTitle="Virtual Tours"
      className={styles.introTextContainerText}
    >
      <p className={open.className}>
        With virtual tours you can visit and feel the place without having to
        leave your home or office, you can interact and walk throgh as if you
        were there, stop to see details or just new perspectives. Do you want to
        know how this technology will improve your sales and make your property
        to stand out?
        <Link
          to="contact"
          key="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
        >
          <button
            className={`${open.className} ${styles.introTextContainerTextButton}`}
          >
            Get an estimation
          </button>
        </Link>
      </p>
    </ContainerWrapper>
  );
};

export default VirtualTours;
