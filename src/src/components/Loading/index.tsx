import { useEffect } from "react";
import logo from "src/assets/loading_final.gif";
import styles from "./loading.module.css";

const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className={styles.loading}>
      <img src={logo} alt="logo loading" />
    </div>
  );
};

export default Loading;
