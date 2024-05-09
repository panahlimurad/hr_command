import React from "react";
import styles from "./addButton.module.css";
import { useLocation } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

function AddButton() {
  const location = useLocation();
  const pathname = location.pathname;

  const formattedText = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  const finalText = formattedText.replace("/", "");

  return (
    <>
      <button className={styles.container}><AddIcon sx={{fontSize:"15px"}}/>Add {finalText}</button>
    </>
  );
}

export default AddButton;
