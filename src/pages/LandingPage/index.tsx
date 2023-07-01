import Footer from "components/Footer";
import { motion } from "framer-motion";

import { DesktopNavBar } from "components/Navbar/Desktop";
import { MobileNavBar } from "components/Navbar/Mobile";
import { useWindowView } from "utils/view";
import styles from "./LandingPage.module.scss";

const LandingPage: React.FC = () => {
  const { isMobile, isTablet } = useWindowView();

  return (
    <div className={styles["container"]}>
      {isTablet || isMobile ? <MobileNavBar /> : <DesktopNavBar />}
      <div className={styles["event-container"]}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "easeInOut", duration: 0.5 }}
          className={styles["poster-container"]}
        >
          <a
            href="https://goo.gl/maps/914saKZwcU1LijKK9"
            className={styles["poster-link"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/poster-oth.png`}
              alt={"oth popup"}
              width={100}
              className={styles["poster"]}
            />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, ease: "easeInOut", duration: 0.5 }}
          className={styles["form-container"]}
        >
          {!isMobile && !isTablet && (
            <div className={styles["collab-container"]}>
              <p>in collaboration with </p>
              <a href="https://maruoworks.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/images/maruo-white.png`}
                  width={150}
                  alt={"logo"}
                  className={styles["logo"]}
                />
              </a>
            </div>
          )}

          <form className={styles["form"]} action="https://submit-form.com/wvypIrHt">
            <input type="hidden" name="_redirect" value="https://events.sageismism.com/success" />
            <div className={styles["group"]}>
              <label className={styles["label"]}>name</label>
              <input
                className={styles["input-text"]}
                type="text"
                name="name"
                placeholder="i.e. gilbert"
                required
              />
            </div>
            <div className={styles["group"]}>
              <label className={styles["label"]}>email address</label>
              <input
                className={styles["input-text"]}
                type="email"
                name="email"
                placeholder="i.e. info@sageismism.com"
                required
              />
            </div>

            <button className={styles["button"]} type="submit">
              submit
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
