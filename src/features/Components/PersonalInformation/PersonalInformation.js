import React from "react";
import styles from "./styles.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function PersonalInformation() {

  return (
    <div className={styles.container}>
      <div className="flex justify-between items-center">
        <p className="font-normal text-[20px]">Personal Information</p>
      </div>
      <div>
        <form className="mt-5 flex flex-col gap-4">
          <div className="flex gap-11">
            <div className="w-[100px]">
              <p className="text-[12px]">PASSPORT NO.</p>
              <p className="text-[9px] text-[#343942] font-normal">
                Add passport no.
              </p>
            </div>
            <input
              className="w-[300px] placeholder:text-[11px]"
              required
              type="text"
              placeholder="Passport No."
            />
          </div>
          <div className="flex gap-11 relative">
            <div className="w-[100px]">
              <p className="text-[10px]">PASSPORT EXP DATE</p>
              <p className="text-[9px] text-[#343942] font-normal">dd/mm/yyy</p>
            </div>
            <input
              className="w-[300px] placeholder:text-[11px]"
              required
              type="text"
              placeholder="Passport Exp Date"
            />
            <CalendarMonthIcon
              sx={{
                position: "absolute",
                right: "12px",
                top: "10px",
                color: "#135CCA",
                fontSize: "15px",
              }}
            />
          </div>
          <div className="flex gap-11 relative">
            <div className="w-[100px]">
              <p className="text-[10px]">DATE OF BIRTHDAY</p>
              <p className="text-[9px] text-[#343942] font-normal">
                Date of birthday
              </p>
            </div>
            <input
              className="w-[300px] placeholder:text-[11px]"
              required
              type="text"
              placeholder="Date of birthday"
            />
            <CalendarMonthIcon
              sx={{
                position: "absolute",
                right: "12px",
                top: "10px",
                color: "#135CCA",
                fontSize: "15px",
              }}
            />
          </div>
          <div className="flex gap-11 relative">
            <div className="w-[100px]">
              <p className="text-[10px]">MARITAL STATUS</p>
              <p className="text-[9px] text-[#343942] font-normal">
                Date of birthday
              </p>
            </div>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInformation;
