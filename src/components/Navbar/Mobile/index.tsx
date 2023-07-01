import classNames from "classnames";
import { motion } from "framer-motion";

import styles from "./Mobile.module.scss";

export const MobileNavBar: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <a
        href="https://sageismism.com/shop"
        className={classNames(styles["shop-link"])}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={`${process.env.PUBLIC_URL}/images/sageism-white.png`}
          alt={"logo"}
          className={classNames(styles["menu-logo"])}
        />
      </a>
      <a
        href="https://maruoworks.com/"
        className={classNames(styles["shop-link"])}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={`${process.env.PUBLIC_URL}/images/maruo-white.png`}
          alt={"logo"}
          className={classNames(styles["menu-logo-2"])}
        />
      </a>
    </div>
  );
};
