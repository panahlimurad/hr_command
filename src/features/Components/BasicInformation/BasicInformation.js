import React from 'react'
import styles from './styles.module.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function BasicInformation() {
    let now = new Date()
    let localization = now.toLocaleDateString()
    console.log(localization); 
  return (
    <div className={styles.container}>
        <div className='flex justify-between items-center'>
            <p className='font-normal text-[20px]'>Basic Information</p>
            <p className='cursor-pointer font-normal text-[13px]'>
            <AttachFileIcon sx={{fontSize:"14px",rotate:"45deg", color:"#969DA6"}}/> Upload Photo
            </p>
        </div>
        <div>
            <form className='mt-5 flex flex-col gap-4'>
                <div className='flex gap-11'>
                <div className='w-[100px]'>
                    <p className='text-[12px]'>FULL NAME</p>
                    <p className='text-[9px] text-[#343942] font-normal'>Add employee name</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='text' placeholder='Employee Name'/>
                </div>
                <div className='flex gap-11 relative'>
                <div className='w-[100px]'>
                    <p className='text-[12px]'>POSITION</p>
                    <p className='text-[9px] text-[#343942] font-normal'>Choose position</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='text' placeholder='Choose Position'/>
                <KeyboardArrowDownIcon sx={{position:'absolute', right:"10px", top:"8px", cursor:"pointer", color:"#135CCA", fontSize:"20px"}}/>
                </div>
                <div className='flex gap-11 relative'>
                <div className='w-[100px]'>
                    <p className='text-[12px]'>DEPARTMENT</p>
                    <p className='text-[9px] text-[#343942] font-normal'>Choose department</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='text' placeholder='Choose Category'/>
                <KeyboardArrowDownIcon sx={{position:'absolute', right:"10px", top:"8px", cursor:"pointer", color:"#135CCA", fontSize:"20px"}}/>
                </div>
                <div className='flex gap-11 relative'>
                <div className='w-[100px]'>
                    <p className='text-[11px]'>DATE OF JOINING</p>
                    <p className='text-[9px] text-[#343942] font-normal'>Date of joining</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='text' value={localization} placeholder='Choose Category'/>
                <CalendarMonthIcon sx={{position:'absolute', right:"12px", top:"10px", color:"#135CCA", fontSize:"15px"}}/>
                </div>
                <div className='flex gap-11'>
                <div className='w-[100px]'>
                    <p className='text-[12px]'>PHONE NUMBER</p>
                    <p className='text-[9px] text-[#343942] font-normal'>Only numbers</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='number' placeholder='000-000-000'/>
                </div>
                <div className='flex gap-11'>
                <div className='w-[100px]'>
                    <p className='text-[12px]'>EMAIL ADDRESS</p>
                    <p className='text-[9px] text-[#343942] font-normal'>Employee email</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='text' placeholder='@example.com'/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default BasicInformation