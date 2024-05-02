import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function EducationComp() {
  return (
    <div className="w-[50%] h-[300px] p-4 border border-solid border-[#E0E4EA] flex flex-col gap-4 rounded-2xl overflow-scroll">
      <div className="flex justify-between items-center cursor-pointer mt-4">
        <div className="text-[20px]">Educations</div>
        <div className="text-[#23272C] gap-1 flex justify-center items-center rounded-xl w-16 bg-[#f4f5f7]">
          <DriveFileRenameOutlineIcon sx={{ fontSize: "15px" }} />
          Edit
        </div>
      </div>
      <div>
        <div className="">Bachelo of Science in Compouter Science University of technology</div>
        <div className='border-b border-solid border-[#E0E4EA]'><CalendarMonthIcon sx={{color:"#9e9e9e", fontSize:"15px"}}/> <span className="text-[13px] font-light">Graduated May 2017</span></div>
      </div>
      <div>
        <div className="">Bachelo of Science in Compouter Science University of technology</div>
        <div className='border-b border-solid border-[#E0E4EA]'><CalendarMonthIcon sx={{color:"#9e9e9e", fontSize:"15px"}}/> <span className="text-[13px] font-light">Graduated May 2017</span></div>
      </div>
      <div>
        <div className="">Bachelo of Science in Compouter Science University of technology</div>
        <div className='border-b border-solid border-[#E0E4EA]'><CalendarMonthIcon sx={{color:"#9e9e9e", fontSize:"15px"}}/> <span className="text-[13px] font-light">Graduated May 2017</span></div>
      </div>
    </div>
  );
}

export default EducationComp;
