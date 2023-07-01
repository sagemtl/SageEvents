import Footer from "components/Footer";
import { motion } from "framer-motion";

import { DesktopNavBar } from "components/Navbar/Desktop";
import { MobileNavBar } from "components/Navbar/Mobile";
import { useWindowView } from "utils/view";
import styles from "./SuccessPage.module.scss";

const SuccessPage: React.FC = () => {
  const { isMobile, isTablet } = useWindowView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles["container"]}
    >
      {isTablet || isMobile ? <MobileNavBar /> : <DesktopNavBar />}
      <div className={styles["success-container"]}>
        <div className={styles["success-message"]}>
          <p>you're confirmed for our</p>
          <p>Off The Hook retail activation launch party</p>
          <p>july 6th from 6pm to 10pm</p>
          <p>oth boutique</p>
          <p>thank you :) see you soon!</p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default SuccessPage;
