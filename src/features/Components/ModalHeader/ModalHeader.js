import React from 'react'



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