import React from "react";
import styles from "./login.module.css";
import profileDefault from "../../images/icons/profileDefault.svg";

function LoginRightSection() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={profileDefault} alt="icon"></img>
      </div>
      <h1 className={styles.title}>
        Streamline your personnel processes for better efficiency and
        convenience today!
      </h1>
    </div>
  );
}

export default LoginRightSection;
