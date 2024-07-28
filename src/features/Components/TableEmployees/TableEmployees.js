import React, { useEffect, useState } from 'react'
import defaultImg from '../../images/icons/profileDefault.svg'
import { shortText } from '../../utils/Functions/ShortText/shortText'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import { getRandomColor } from '../../utils/Functions/randomBgColor/randomBgColor';
const TableEmployees = ({dataLeaves, dataVacancies}) => {

  console.log(dataVacancies)
  
  const [bgColor, setBgColor] = useState('');

console.log(bgColor)

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []); 

  return (
    <div className='w-full h-[600px] p-4 flex flex-col gap-2 border border-solid border-[#E0E4EA] rounded-lg'>
        {dataLeaves ? dataLeaves.map((item, index) =>(
          <ul key={index} className='flex border-b border-[#E0E4EA] p-2 text-[#text-[#17243E]]'>
            <li className='flex-1 flex items-center gap-4'>
            <input  className='h-4 w-4' type='checkbox'/>
            <img className='w-10 h-10' src={defaultImg} alt='profile'/>
            <p className='text-[16px] font-normal'>{shortText(16,item?.name)}</p>
          </li>
          <li style={{backgroundColor:bgColor}}  className='flex-1 flex items-center justify-center rounded-2xl h-7'>{shortText(18,item?.position)}</li>
          <li className='flex-1 flex items-center justify-center'>{shortText(18,item?.department)}</li>
          <li className='flex-1 flex items-center justify-center'>{shortText(18,item?.leaveType)}</li>
          <li className='flex-1 flex items-center justify-center gap-2'><CalendarMonthIcon sx={{fontSize:"15px", color:"#969DA6"}}/>{item?.period}</li>
        </ul>
        )) : dataVacancies.map((item, index) =>(
          <ul key={index} className='flex border-b border-[#E0E4EA] p-2 text-[#text-[#17243E]]'>
            <li className='flex-1 flex items-center gap-4'>
            <input  className='h-4 w-4' type='checkbox'/>
            <img className='w-10 h-10' src={defaultImg} alt='profile'/>
            <p className='text-[16px] font-normal'>{shortText(16,item?.positionTitle)}</p>
          </li>
          <li style={{backgroundColor:bgColor}}  className='flex-1 flex items-center justify-center rounded-2xl h-7'>{shortText(18,item?.status)}</li>
          <li className='flex-1 flex items-center justify-center'>{shortText(18,item?.applicants)}</li>
          <li className='flex-1 flex items-center justify-center gap-2'><CalendarMonthIcon sx={{fontSize:"15px", color:"#969DA6"}}/>{item?.publication}</li>
        </ul>
        )) }
         <div className='mt-2 items-center flex '>
          <div className='flex gap-2 items-center flex-1'>
          <KeyboardBackspaceIcon sx={{fontSize:"15px", color:"#aaacba", cursor:"pointer"}}/>
          <p className='bg-[#f3f5f7] text-[#23272C] flex justify-center items-center rounded-xl w-[32px] h-[32px]'>2</p>
          <KeyboardTabIcon sx={{fontSize:"15px", color:"#aaacba", cursor:"pointer"}}/>
          </div>
          <div className='flex-1 flex items-center justify-end gap-4'>
        <p className='text-[#898989] text-[11px]'>Show 1 to 8 of 50 entries</p>
        <p className='w-[85px] h-[30px] rounded-2xl bg-[#f3f5f7] text-[10px] flex justify-center items-center text-[#23272C]'>Show 8 <ExpandMoreIcon sx={{cursor:"pointer", color:"#343944"}}/></p>
          </div>
        </div>
    </div>
  )
}

export default TableEmployees