import React  from "react";
import styles from "./pageHeader.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddButton from "../AddButton/AddButton";
import { useLocation } from "react-router-dom";

function PageHeader() {

  const location = useLocation()
  const pathname = location.pathname
  const formattedText = pathname.charAt(1).toUpperCase() + pathname.slice(2);

  const finalText = formattedText.replace("/", "");

  console.log(location.pathname)
  
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className={styles.container}>
      <div className={styles.text}>{finalText}</div>
      <div className="flex gap-10 justify-center items-center w-[50%]">
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
        <AddButton text="Add Departament"/>
      </div>
    </div>
  );
}

export default PageHeader;
