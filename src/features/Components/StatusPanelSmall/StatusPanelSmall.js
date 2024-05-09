import React from 'react'

function StatusPanelSmall({text}) {
  return (
    <div className="w-[20%] h-[24px] text-[#0EB01D]  bg-[#DDFCE0] rounded-2xl text-[11px] font-normal items-center flex justify-center">
            {text}
          </div>
  )
}

export default StatusPanelSmall