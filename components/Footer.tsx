import style from "../styles/customFooter.module.css";
import { Open_Sans } from "@next/font/google";
const open = Open_Sans({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className={`${style.customFooterContainer} ${open.className}`}>
      © 2023 made by Koke Designs
    </div>
  );
};

export default Footer;
