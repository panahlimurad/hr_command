import React from 'react'
import LogRegTable from '../../features/Components/LoginComponents/LogRegTable'
import LoginRightSection from '../../features/Components/LoginComponents/LoginRightSection'

function Register() {
  return (
    <div className='w-full bg-[#f6fafe] h-screen relative'>
    <div className='w-full flex justify-end h-screen p-2'>
    <LoginRightSection/>
    </div>
    <LogRegTable title={"Register"} isLogin={"Sign up"} isRegister={true}/>
    </div>
  )
}

export default Register