import React, { useState } from "react";
import styles from "./longCards.module.css";
import Logo from "../../images/icons/profileDefault.svg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function LongCards() {

  const [openSmall, setOpenSmall] = useState(true)

  
  const openSmallModal = () => {
    setOpenSmall(!openSmall)
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <img
          className="w-14 rounded-full object-cover"
          src={Logo}
          alt="dPhoto"
        ></img>
        <h3>Departament Name</h3>
      </div>
      <div className="flex justify-around">
        <p className="text-[12px] text-[#343942] font-normal">Opening</p>
        <p className="text-[14px] text-[#23272C] font-medium flex items-center gap-2">
          <CalendarMonthIcon sx={{ fontSize: 15, color: "#969da6" }} />
          Sep,12 2023
        </p>
      </div>
      <div className="flex justify-around gap-20">
        <p className="text-[12px] text-[#343942] font-normal">Employess </p>
        <p className="text-[14px] text-[#23272C] font-medium">23</p>
      </div>
      <div
        onClick={openSmallModal}
        className="absolute top-2 right-4 text-[#969da6]"
      >
        <MoreHorizIcon sx={{ cursor: "pointer" }} />
        {!openSmall && 
        <div className="bg-white flex p-2 flex-col items-center rounded-lg w-[80px] absolute top-5 right-1">
          <div className="p-1 rounded-lg cursor-pointer hover:bg-[#c7cbd1] hover:text-[#fff]">
            <p>delete</p>
          </div>
          <div className="p-1 rounded-lg cursor-pointer hover:bg-[#c7cbd1] hover:text-[#fff]">
            <p>edit1</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default LongCards;
