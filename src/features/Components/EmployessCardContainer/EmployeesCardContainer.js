import React from 'react'
import EmployessCard from '../EmployeesCard/EmployessCard'
import ScrollableContainer from '../ScroolBarContainer/ScroolBarContainer'

function EmployeesCardContainer() {
  return (
    <div>
        <ScrollableContainer>
        <EmployessCard/>
        <EmployessCard/>
        <EmployessCard/>
        <EmployessCard/>
        <EmployessCard/>
        <EmployessCard/>
        </ScrollableContainer>
    </div>
  )
}

export default EmployeesCardContainer