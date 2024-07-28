import React from 'react'
import styles from './style.module.css'

function VacanciesFilter() {
  return (
    <div className='mt-4 border border-solid border-borderDefault rounded-2xl h-[575px] p-4'>
        <div className='flex justify-between items-center'>
            <p className='text-[20px] font-medium'>Vacancies Filter</p>
            <p className={styles.clear}>CLEAR ALL</p>
        </div>
        <div>
            <div className='mt-4'>
                Departament
            </div>
            <ul className='flex flex-wrap gap-2 mt-3 max-h-[190px] overflow-scroll'>
                <li className={styles.list}>All Departament</li> 
                <li className={styles.list}>Development</li>
                <li className={styles.list}>Sales & Marketing</li>
                <li className={styles.list}>Sales Manegment</li>
                <li className={styles.list}>Support</li>
            </ul>
        </div>
        <div>
        <div className='mt-4'>
                Position Type
            </div>
            <ul className='flex flex-wrap gap-2 mt-3 max-h-[190px] overflow-scroll'>
                <li className={styles.list}>All Positions</li>
                <li className={styles.list}>Development</li>
                <li className={styles.list}>Sales & Marketing</li>
                <li className={styles.list}>Sales Manegment</li>
                <li className={styles.list}>Support</li>
            </ul>
        </div>
    </div>
  )
}

export default VacanciesFilter