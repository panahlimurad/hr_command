import React, { useEffect, useState } from 'react';
import { getRandomColor } from '../../utils/Functions/randomBgColor/randomBgColor';
import { PieChart, Pie, Cell } from "recharts";

const SmallChartCard = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const [color, setColor] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const randomColor = getRandomColor();
    setColor(randomColor);
    setKey(prevKey => prevKey + 1); 
  }, []);

  return (
    <div className='flex-1 flex h-[100px] rounded-xl' style={{ backgroundColor: color }}>
      <div className='w-[60%] h-full flex flex-col gap-5 px-4 justify-center'>
        <p className='text-[10px] font-normal text-textColors'>DEPARTMENT COUNT</p>
        <p className='text-[28px] font-semibold text-textColor'>55</p>
      </div>
      <div className='w-[40%] h-full flex items-center justify-center'>
        <PieChart width={80} height={80} key={key}>
          <Pie
            data={data}
            cx={33}
            cy={35}
            innerRadius={20}
            outerRadius={30}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  )
}

export default SmallChartCard;
