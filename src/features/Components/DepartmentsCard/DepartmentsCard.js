import React from 'react'
import LongCards from '../LongCards/LongCards'
import ScrollableContainer from '../ScroolBarContainer/ScroolBarContainer'

function DepartmentsCard() {
  return (
    <div>
      <ScrollableContainer y>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        <LongCards/>
        </div>
      </ScrollableContainer>
    </div>
  )
}

export default DepartmentsCard