import Body from "./Body";
import CustomFooter from "../sharedcomponents/CustomFooter";
import Header from "../sharedcomponents/Header";
import Signup from "./SignUp";
import WhoWeAre from "./WhoWeAre";
import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col w-max-[1440px] bg-white'>
      <div className='flex flex-col self-center w-full max-w-[1120px] max-md:max-w-full bg-white'>
      <Header/>
      <Body/>
      <WhoWeAre/>
      <Signup/>
      <CustomFooter/></div>
    </div>
  )
}
