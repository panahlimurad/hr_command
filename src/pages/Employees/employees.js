import React from 'react'
import PageHeader from '../../features/Components/PageHeader/PageHeader'
import EmployeesCardContainer from '../../features/Components/EmployessCardContainer/EmployeesCardContainer'

function Employees() {
  return (
    <div>
      <div>
        <PageHeader/>
      </div>
      <div className='mt-4'>
        <EmployeesCardContainer/>
      </div>
    </div>
  )
}

export default Employees