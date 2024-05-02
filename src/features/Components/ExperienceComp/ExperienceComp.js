import React from 'react'
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function ExperienceComp() {
  return (
    <div className='bg-[#f4f5f7] w-[100%] p-4 flex flex-col rounded-2xl h-[300px] overflow-scroll'>
        <div className="flex justify-between items-center cursor-pointer">
        <div className="text-[20px] font-semibold">Experience</div>
        <div className="text-[#23272C] gap-1 flex justify-center items-center rounded-xl w-16 bg-[#fff]">
          <DriveFileRenameOutlineIcon sx={{ fontSize: "15px" }} />
          Edit
        </div>
      </div>
      
        <div className='mt-2'>
          <div className='flex flex-col'>
            <p className>
            Senior Project Manager
            </p>
            <div>
              <CalendarMonthIcon sx={{color:"#9e9e9e", fontSize:"15px"}}/> <span className='text-[13px] font-semibold'>Aug, 2023</span>
            </div>
            <div className='mt-2'>
              <div>FRONT END DEVELOPER</div>
              <div className='border-b-2 border-solid border-[#E0E4EA] mt-2'>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default ExperienceComp