import React from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";

const CancelConfirm = ({cancelMethod, confirmMethod}) => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1 }}
    transition={{
      duration: 0.5,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
      opacity: { duration: 1 }, 
      scale: { duration: 0.3 } 
    }}
    className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <h2>The data you type will be deleted</h2>
          <h1>Are you sure you want to cancel?</h1>
        </div>
        <div className={styles.buttonsContainer}>
          <button onClick={cancelMethod} className={styles.cancelButton}>Cancel</button>
          <button onClick={confirmMethod} className={styles.confirmButton}>Confirm</button>
        </div>
      </div>
    </motion.div>
  );
};

export default CancelConfirm;
