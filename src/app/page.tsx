import React from 'react'
import Body from './pages/Body'
import CustomFooter from './pages/CustomFooter'
import Header from './pages/Header'
import WhoWeAre from './pages/WhoWeAre'
import SignUp from './pages/SignUp'


export default function page() {
  return (
    <div className='flex flex-col w-full bg-white'>
      <div className='flex flex-col self-center w-full max-w-[1122px] max-md:max-w-full bg-white'>
      <Header/>
      <Body/>
      <WhoWeAre/>
      <SignUp/>
      <CustomFooter/></div>
    </div>
  )
}
