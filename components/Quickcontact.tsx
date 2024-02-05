import Image from "next/image";
import style from "../styles/quickContact.module.css";
const Quickcontact = () => {
  return (
    <div className={style.quickContactContainer}>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:diego.marchant@gmail.com"
      >
        <Image src="/gmail.svg" height={30} width={30} alt="gmail" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/panoramebali"
      >
        <Image src="/instagram.svg" height={30} width={30} alt="instagram" />
      </a>
      <a href="https://wa.me/6281338962329" target="_blank" rel="noreferrer">
        <Image src="/whatsapp.svg" height={30} width={30} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Quickcontact;
