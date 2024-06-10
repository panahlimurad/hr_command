import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from '@mui/icons-material/Close';

function SmallButton({ text, method }) {
  return (
    <div className="text-[#fff] text-[16px] flex justify-center items-center gap-4">
      <button className="bg-[#eef4fe] w-[100px] flex gap-1 items-center justify-center h-[35px] hover:bg-[#e4e9f2] rounded-lg text-[#1e74ec]">
        <CloseIcon sx={{fontSize:"15px"}}/>
        Cancel
      </button>
      <button  onClick={method} className="bg-[#1e74ec] w-[150px] h-[35px] rounded-lg flex gap-2 items-center justify-center">
        <SaveIcon sx={{ color: "#fff", fontSize: "15px" }} />
        {text}
      </button>
    </div>
  );
}

export default SmallButton;
