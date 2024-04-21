import React from 'react'
import styles from './longCards.module.css'
import Logo from '../../images/icons/profileDefault.svg'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function LongCards() {

  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <img className='w-14 rounded-full object-cover' src={Logo} alt='dPhoto'></img>
            <h3>Departament Name</h3>
        </div>
        <div className='flex justify-around'>
            <p className='text-[12px] text-[#343942] font-normal'>Opening</p>
            <p className='text-[14px] text-[#23272C] font-medium flex items-center gap-2'><CalendarMonthIcon sx={{fontSize:15, color:"#969da6"}}/>Sep,12 2023</p>
        </div>
        <div className='flex justify-around gap-20'>
            <p className='text-[12px] text-[#343942] font-normal'>Employess </p>
            <p className='text-[14px] text-[#23272C] font-medium'>23</p>
        </div>
    <div className='absolute top-2 right-4 text-[#969da6]'>
      <MoreHorizIcon sx={{cursor:"pointer"}}/>
    </div>
    </div>
  )
}

export default LongCards