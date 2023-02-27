import Image from "next/image";
import style from "../styles/quickContact.module.css";
const Quickcontact = () => {
  return (
    <div className={style.quickContactContainer}>
      <a>
        <Image src="/gmail.svg" height={30} width={30} alt="whatsapp" />
      </a>
      <a>
        <Image src="/instagram.svg" height={30} width={30} alt="whatsapp" />
      </a>
      <a>
        <Image src="/whatsapp.svg" height={30} width={30} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Quickcontact;
