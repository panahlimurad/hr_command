import React  from "react";
import styles from "./style.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SaveButton from "../SaveButton/SaveButton";

function EmpPageHeader({text}) {

  
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <div className="flex gap-4 justify-end items-center w-[50%]">
        <p className="text-[13px] text-[#343942]">STATUS</p>
        <form>
          <select
            id="small"
            className="h-[30px] cursor-pointer block w-full  rounded-lg border border-gray-300 bg-gray-50 text-[13px] text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            <option selected>Choose a status</option>
            <option value="Active">Active</option>
          </select>
        </form>
        <SaveButton text="Save"/>
      </div>
    </div>
  );
}

export default EmpPageHeader;
