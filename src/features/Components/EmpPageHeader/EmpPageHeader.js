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
      <div className="flex gap-4 justify-center items-center w-[50%]">
        <p className="text-[13px] text-[#343942]">STATUS</p>
        <Box sx={{ minWidth: 120, backgroundColor:"#eef4fe"}}>
          <FormControl fullWidth >
            <InputLabel sx={{top: '-8px', left: '-5px'}}  id="demo-simple-select-label">Filter</InputLabel>
            <Select
            sx={{height:30}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <SaveButton text="Save"/>
      </div>
    </div>
  );
}

export default EmpPageHeader;
