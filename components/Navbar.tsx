import Image from "next/image";
import mainLogo from "../public/mainLogo_white.png";
import { NavBarLinks } from "../store";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-scroll";
import { useState } from "react";

import { useEffect } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= window.innerHeight) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={`${styles.navbarContainer} ${
        navbar ? styles.scrolledPast : ""
      }`}
    >
      <div className={styles.insider}>
        <div>
          <Image src={mainLogo} alt="Main logo" height={80} />
        </div>
        <nav className={styles.navbarDesktop}>
          <ul>
            {NavBarLinks.map((link, index) => {
              return (
                <Link
                  to={link.path}
                  key={index}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                >
                  <li key={index}>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
        <nav className={styles.navbarMobile}></nav>
      </div>
    </div>
  );
};

export default Navbar;
