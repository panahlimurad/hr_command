import React, { useEffect, useState } from "react";
import { getRandomColor } from "../../utils/Functions/randomBgColor/randomBgColor";

const ActivityCard = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    const randomColor = getRandomColor();

    setColor(randomColor);
  }, []);

  return (
    <div
      className="flex h-[85px] items-center justify-center rounded-xl mt-4"
      style={{ backgroundColor: color }}
    >
      <div className="text-[20px] font-semibold text-textColor w-[30%] flex justify-center items-center">09:00</div>
      <div className="h-[50px] w-[4px] bg-colorDefault rounded-md"></div>
      <div className="flex flex-col w-[70%] ml-4">
        <p className="text-[14px] text-[#343942] font-light">Avtivity Location</p>
        <p className="text-[18px] text-textColor">Avtivity Title</p>
      </div>
    </div>
  );
};

export default ActivityCard;
