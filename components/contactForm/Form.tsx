// components/contactForm/Form.tsx
import axios from "axios";
import { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";
import { validate } from "../../utils/validate";
import Input from "./Input";
import TextArea from "./Textarea";
import styles from "../../styles/Form.module.css";
import { Open_Sans } from "@next/font/google";
const open = Open_Sans({ subsets: ["latin"] });

interface IValues {
  name: string;
  email: string;
  message: string;
}
interface IErrors extends Partial<IValues> {}
export const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    axios
      .post("/api/mail", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({ name: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
        } else {
          setLoading(false);
          setMessageState(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessageState(String(err.message));
      });
    setLoading(false);
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div>
        <Input
          className={styles.inputContainer}
          value={values.name}
          onChange={handleChange}
          id="name"
          name="name"
          label="Your Name"
          placeholder="Name"
          error={!values.name && !!errors.name}
          errorMessage={!values.name && !!errors.name ? errors.name : ""}
        />
        <Input
          className={`${styles.inputContainer} ${open.className}`}
          value={values.email}
          onChange={handleChange}
          id="email"
          name="email"
          label="Your Email"
          placeholder="Email"
          error={!values.email && !!errors.email}
          errorMessage={!values.email && !!errors.email ? errors.email : ""}
        />
      </div>

      <TextArea
        value={values.message}
        onChange={handleChange}
        id="message"
        name="message"
        label="Your Message"
        placeholder="Message"
        error={!values.message && !!errors.message}
        errorMessage={!values.message && !!errors.message ? errors.message : ""}
      />
      <button
        className="mt-4 w-full rounded-md bg-blue-600 py-3 px-5 text-lg text-white outline-none hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-opacity-60"
        type="submit"
        disabled={loading}
      >
        {loading !== true ? (
          "SEND"
        ) : (
          <div className="flex h-full w-full items-center justify-center ">
            <RiLoader5Fill className="h-8 w-8 animate-spin" />
          </div>
        )}
      </button>
      <p className="mt-5 text-green-500 dark:text-green-500">
        {success !== false ? (
          messageState
        ) : (
          <span className="text-red-500 dark:text-red-500">{messageState}</span>
        )}
      </p>
    </form>
  );
};
