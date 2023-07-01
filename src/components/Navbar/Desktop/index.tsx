import classNames from "classnames";

import styles from "./Desktop.module.scss";

import "lazysizes";

export const DesktopNavBar: React.FC = () => {
  return (
    <div className={styles["header"]}>
      <a href="https://sageismism.com/shop" target="_blank" rel="noopener noreferrer">
        {" "}
        <img
          src={`${process.env.PUBLIC_URL}/images/sageism-white.png`}
          alt={"logo"}
          className={classNames(styles["logo"])}
        />
      </a>
    </div>
  );
};
