import logo from "../../assets/logo-run.gif";
import styles from "./LoadingPage.module.scss";

const LoadingPage: React.FC = () => (
  <div className={styles["container"]}>
    <img src={logo} alt={"running logo"} className={styles["logo"]} />
  </div>
);

export default LoadingPage;
