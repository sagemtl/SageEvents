import Footer from "components/Footer";
import { motion } from "framer-motion";

import { DesktopNavBar } from "components/Navbar/Desktop";
import { MobileNavBar } from "components/Navbar/Mobile";
import { useWindowView } from "utils/view";
import styles from "./ErrorPage.module.scss";

const ErrorPage: React.FC = () => {
  const { isMobile, isTablet } = useWindowView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles["container"]}
    >
      {isTablet || isMobile ? <MobileNavBar /> : <DesktopNavBar />}
      <div className={styles["error-container"]}>
        <div className={styles["error-message"]}>
          <p>404 page not found.</p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default ErrorPage;
