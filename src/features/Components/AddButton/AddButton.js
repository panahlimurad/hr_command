import React from "react";
import styles from "./addButton.module.css";

function AddButton({text}) {
  return (
    <>
      <button className={styles.container}>{text}</button>
    </>
  );
}

export default AddButton;
