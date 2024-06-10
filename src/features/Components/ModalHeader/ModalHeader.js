import React from 'react'
import SmallButton from '../SmallButton/SmallButton'


function ModalHeader({title}) {
  return (
    <div className='flex justify-between px-4 items-center'>
        <div className='text-[20px]'>
            {title}
        </div>
    </div>
  )
}

export default ModalHeader