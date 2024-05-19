import React from 'react'
import styles from './styles.module.css'


function SkillsInformation() {
  return (
    <div>
         <div className={styles.container}>
        <div className='flex justify-between items-center'>
            <p className='font-normal text-[20px]'>Skills</p>
            <button className='bg-[#1e74ec] w-[70px] rounded-md h-[20px] text-[13px] text-[#fff]'>Add</button>
        </div>
        <div>
            <form className='mt-2 flex flex-col gap-4'>
                <div className='flex gap-11'>
                <input className='w-full placeholder:text-[11px]' required type='text' placeholder='Add sklills'/>
                </div>
            </form>
        <div className='w-[430px] gap-2 overflow-y-auto flex h-[50px] flex-wrap mt-3'>
        <span className='px-3 h-[15px] flex justify-center items-center border border-solid text-[10px] text-[#878a8f] rounded-2xl border-[#E0E4EA]'>Project</span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default SkillsInformation