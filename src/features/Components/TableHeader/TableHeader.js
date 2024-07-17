import React from "react";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const TableHeader = ({ data }) => {
  return (
    <div className="flex h-[50px] w-[95%] items-center rounded-lg bg-[#f3f5f7]">
      <div className="flex w-full text-[14px] font-normal text-[#343942]">
        {data.map((item, index) => (
          <>
            <p key={index} className="flex-1 text-center">
              {item.label}{" "}
              {item.showIcon && (
                <ImportExportIcon
                  sx={{ fontSize: "15px", cursor: "pointer" }}
                />
              )}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;
