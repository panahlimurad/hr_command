import React from 'react'
import ActivityCard from '../ActivityCard/ActivityCard'

const ActivityContainer = () => {
  return (
    <div className='mt-2'>
        <div className='text-[20px] text-textColor font-semibold'>Activity</div>
        <div className='overflow-scroll h-[260px] mt-1'>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        <ActivityCard/>
        </div>
    </div>
  )
}

export default ActivityContainer