import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <div className={styles["container"]}>
    <div>
      <h3 className={styles["copyright"]}>© sageism {new Date().getFullYear()}</h3>
    </div>
    <div className={styles["details"]}>
      <a href="https://www.instagram.com/sageismism/" target="_blank" rel="noopener noreferrer">
        <p className={styles["link"]}>instagram</p>
      </a>
    </div>
  </div>
);

export default Footer;
