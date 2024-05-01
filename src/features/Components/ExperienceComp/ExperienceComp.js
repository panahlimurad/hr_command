import React from 'react'
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";



function ExperienceComp() {
  return (
    <div className='bg-[#f4f5f7] w-[100%]'>
        <div className="flex justify-between items-center cursor-pointer">
        <div className="text-[20px]">Personal Info</div>
        <div className="text-[#23272C] gap-1 flex justify-center items-center rounded-xl w-16 bg-[#f4f5f7]">
          <DriveFileRenameOutlineIcon sx={{ fontSize: "15px" }} />
          Edit
        </div>
      </div>
    </div>
  )
}

export default ExperienceComp