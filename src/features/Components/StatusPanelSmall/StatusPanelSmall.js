import React from "react";

function StatusPanelSmall({ text }) {
  return (
    <div className="flex h-[24px] w-[25%] items-center justify-center rounded-2xl bg-[#DDFCE0] text-[10px] font-normal text-[#0EB01D]">
      {text}
    </div>
  );
}

export default StatusPanelSmall;
