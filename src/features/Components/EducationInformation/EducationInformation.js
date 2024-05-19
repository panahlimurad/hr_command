import React from 'react'
import styles from './styles.module.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function EducationInformation() {
  return (
    <div className={styles.container}>
        <div className='flex justify-between items-center'>
            <p className='font-normal text-[20px]'>Education</p>
        </div>
        <div>
            <form className='mt-5 flex flex-col gap-4'>
                <div className='flex gap-11'>
                <div className='w-[100px]'>
                    <p className='text-[12px]'>School Name</p>
                    <p className='text-[9px] text-[#343942] font-normal'>Add school</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='text' placeholder='Add school'/>
                </div>
                <div className='flex gap-11'>
                <div className='w-[100px]'>
                    <p className='text-[12px]'>Certificate</p>
                    <p className='text-[9px] text-[#343942] font-normal'>Add certificate (optional)</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='text' placeholder='Add certificate (optional)'/>
                </div>
                <div className='flex gap-11 relative'>
                <div className='w-[100px]'>
                    <p className='text-[11px]'>DATE OF GRADUATED</p>
                </div>
                <input className='w-[300px] placeholder:text-[11px]' required type='text' placeholder='dd/mm/yyyy'/>
                <CalendarMonthIcon sx={{position:'absolute', right:"12px", top:"10px", color:"#135CCA", fontSize:"15px"}}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EducationInformation