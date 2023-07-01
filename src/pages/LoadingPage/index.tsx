import styles from "./LoadingPage.module.scss";

const LoadingPage: React.FC = () => (
  <div className={styles["container"]}>
    <img
      src={`${process.env.PUBLIC_URL}/images/logo-run.gif`}
      alt={"running logo"}
      className={styles["logo"]}
    />
  </div>
);

export default LoadingPage;
