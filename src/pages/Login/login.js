import React from 'react'
import LoginRightSection from '../../features/Components/LoginComponents/LoginRightSection'
import LogRegTable from '../../features/Components/LoginComponents/LogRegTable'

function Login() {
  return (
    <div className='w-full bg-[#f6fafe] h-screen relative'>
      <div className='w-full flex justify-end h-screen p-2'>
      <LoginRightSection/>
      </div>
      <LogRegTable title={"Log in"} isLogin={"Sign in"}/>
      </div>
  )
}

export default Login