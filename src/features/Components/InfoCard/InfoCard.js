import React from "react";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

function InfoCard() {
  return (
    <div className="w-[50%] h-[300px] p-4 border border-solid border-[#E0E4EA] flex flex-col gap-2 justify-center rounded-2xl">
      <div className="flex justify-between items-center cursor-pointer">
        <div className="text-[20px]">Personal Info</div>
        <div className="text-[#23272C] gap-1 flex justify-center items-center rounded-xl w-16 bg-[#f4f5f7]">
          <DriveFileRenameOutlineIcon sx={{ fontSize: "15px" }} />
          Edit
        </div>
      </div>
      <div>
        <table class="border-collapse w-full">
          <tbody>
            <tr className="h-12">
              <td class="border-b border-gray-200 font-light text-[12px]">PASSPORT NO.</td>
              <td class="border-b border-gray-200 text-end font-semibold text-[12px]">AZE 3243245</td>
            </tr>
            <tr className="h-12">
              <td class="border-b border-gray-200 font-light text-[12px]">PHONE</td>
              <td class="border-b border-gray-200 text-end font-semibold text-[12px]">055-456-78-99</td>
            </tr>
            <tr className="h-12">
              <td class="border-b border-gray-200 font-light text-[12px]">BIRTHDAY</td>
              <td class="border-b border-gray-200 text-end font-semibold text-[12px]">19.01.1993</td>
            </tr>
            <tr className="h-12">
              <td class="border-b border-gray-200 font-light text-[12px]">MARITAL STATUS</td>
              <td class="border-b border-gray-200 text-end font-semibold text-[12px]">Married</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoCard;
