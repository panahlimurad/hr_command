import React from 'react'
import SmallButton from '../SmallButton/SmallButton'


function ModalHeader() {
  return (
    <div className='flex justify-between px-4 items-center'>
        <div className='text-[20px]'>
            Create Employee
        </div>
        <div>
            <SmallButton text="Save"/>
        </div>
    </div>
  )
}

export default ModalHeader