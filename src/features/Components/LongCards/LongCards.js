import React, { useEffect, useState } from "react";
import styles from "./longCards.module.css";
import Logo from "../../images/icons/profileDefault.svg";
import Test from "../../images/icons/test.svg";
import { getRandomColor } from "../../utils/Functions/randomBgColor/randomBgColor";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { shortText } from "../../utils/Functions/ShortText/shortText";

function LongCards() {
  const [color, setColor] = useState("");
  const router = useNavigate();

  useEffect(() => {
    const randomColor = getRandomColor();

    setColor(randomColor);
  }, []);

  const toDetails=()=>{
      router('/departments-details')
  }

  return (
    <motion.div
    onClick={toDetails}
      whileHover={{
        // backgroundColor: `rgba(255, 255, 255, 0.5)`,
        fontSize: "17px",
        transition: { duration: 0.5 },
      }}
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <div className="font-normal">
      {shortText(22, "Software Engineerasdasdsa" )}
      </div>
      
<div class="flex -space-x-4 rtl:space-x-reverse">
    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Test} alt=""/>
    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Logo} alt=""/>
    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Test} alt=""/>
    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Logo} alt=""/>
    <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src={Test} alt=""/>
</div>

    </motion.div>
  );
}

export default LongCards;
