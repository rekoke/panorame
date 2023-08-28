import { useState } from "react";
import { NavBarLinks } from "../store";
import { Link } from "react-scroll";
import styles from "../styles/SideBar.module.css";
import Image from "next/image";
import mainLogo from "../public/mainLogo_white.png";

interface Props {}

export const Sidebar: React.FC<Props> = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isOpen = openMenu ? styles.menuOpen : "";

  const handleClickSidebar = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.sidebarContainer}>
      <button onClick={handleClickSidebar} className={styles.openMenu}>
        <div className={`${styles.menu_btn} ${isOpen}`}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </button>
      <div className={`${styles.hiddenMenu} ${isOpen}`}>
        <Image src={mainLogo} alt="Main logo" height={80} />
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
                onClick={handleClickSidebar}
              >
                <li key={index}>{link.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
