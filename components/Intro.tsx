import { ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import { Link } from "react-scroll";

const introInside = () => {
  return (
    <div className={styles.introTextContainer}>
      <div className={styles.introTextContainerText}>
        <h1>The augmented virtual reality tour your villa deserves</h1>
      </div>
      <div className={styles.introTextContainerImages}>
        <Image src="/mp_logo.png" height={100} width={100} alt="matterport" />
        <Image src="/360_logo.png" height={100} width={100} alt="360" />
        <Image src="/theta_logo.png" height={100} width={100} alt="theta" />
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <div>
      <ParallaxBanner
        layers={[
          {
            image: "/villa.jpg",
            speed: -25,
            opacity: [0.7, 0.1],
          },
          {
            startScroll: 0,
            endScroll: 600,
            translateY: ["0vh", "30vh"],
            opacity: [1, 0],
            children: introInside(),
          },
        ]}
        className={`aspect-[2/1] ${styles.parallaxBanner}`}
        style={{ height: "100vh", width: "100vw" }}
      ></ParallaxBanner>
      <Link
        to="virtualTours"
        key="virtualTours"
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
      >
        <button className={styles.arrow_down}>
          <Image src="/arrowdown.png" height={100} width={100} alt="down" />
        </button>
      </Link>
    </div>
  );
};

export default Intro;
