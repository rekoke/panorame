import { Form } from "./contactForm/Form";
import Quickcontact from "./Quickcontact";
import styles from "../styles/Contact.module.css";
import { Open_Sans } from "@next/font/google";

const open = Open_Sans({ subsets: ["latin"] });

const Contact = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h2>Contact us</h2>
      <div className={styles.formTextContainer}>
        <div>
          <ul className={open.className}>
            <li>Tel: +62 662 123 089</li>
            <li>Email: panoramebali@gmail.com</li>
            <li>Bali, Indonesia 🇮🇩</li>
          </ul>
        </div>
        <Form />
      </div>
      <Quickcontact />
    </div>
  );
};

export default Contact;
