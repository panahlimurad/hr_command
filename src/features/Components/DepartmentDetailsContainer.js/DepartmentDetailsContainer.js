import React from 'react'
import styles from './style.module.css'
import SmallChartCard from '../SmallChartCard/SmallChartCard'
import BasicCalendar from '../BasicCalendar/BasicCalendar'
import ActivityContainer from '../ActivityContainer/ActivityContainer'


const DepartmentDetailsContainer = () => {
  return (
    <div className='flex gap-4'>
    <div className={styles.container}>
        <div className='flex flex-col gap-8'>
        <div className='flex gap-4'>
            <SmallChartCard/>
            <SmallChartCard/>
            <SmallChartCard/>
        </div>
        <div className="flex flex-col gap-4  p-4">
        <div className="flex justify-between">
          <div>Department Information</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Department Name</li>
              <li className="font-semibold text-[#949eb5]">IT DEPARTMENT</li>
            </ul>
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Email Address</li>
              <li className="font-semibold text-[#949eb5]">
                infoinfo@gmail.com
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Responsible Person</li>
              <li className="font-semibold text-[#949eb5]">Adams</li>
            </ul>
            <ul className="text-textLightColor flex flex-col gap-1">
              <li>Phone</li>
              <li className="font-semibold text-[#949eb5]">
                +1 (555) 555-5555
              </li>
            </ul>
          </div>
          <div className="h-[155px] overflow-scroll">
            <div className="text-textLightColor">Description</div>
            <p className="font-semibold text-[#949eb5] text-[15px] mt-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
          </div>
        </div>
      </div>
      </div>
    
    </div>
    <div className={styles.calendarContainer}>
     <BasicCalendar/>
     <div className='w-full bg-borderDefault h-[2px] mt-4'></div>
     <ActivityContainer/>
    </div>
     </div>
  )
}

export default DepartmentDetailsContainer