import { useEffect, useRef } from "react";

import { useLocalStorage } from "../../utils/useLocalStorage";
import light from "/img/icons/light.svg";
import dark from "/img/icons/dark.svg";
import styles from "./BtnDarkMode.module.scss";

const BtnDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage("dark-mode", false);

  const btnRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark === true) {
      document.body.classList.add("dark-mode");
      btnRef.current.classList.add(`${styles.darkActive}`);
    } else {
      document.body.classList.remove("dark-mode");
      btnRef.current.classList.remove(`${styles.darkActive}`);
    }
  }, [isDark]);

  return (
    <button
      className={styles.dark}
      ref={btnRef}
      onClick={() => toggleDarkMode()}
    >
      <img className={styles.darkIcon} src={light} alt="Light mode" />
      <img className={styles.darkIcon} src={dark} alt="Dark mode" />
    </button>
  );
};

export default BtnDarkMode;
