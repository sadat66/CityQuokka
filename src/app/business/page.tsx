import React from 'react'
import Header from '../sharedcomponents/Header'
import CustomFooter from '../sharedcomponents/CustomFooter'
import Hero from './Hero'
import Features from './Features'

export default function page() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <div className='flex flex-col self-center w-full max-w-[1120px] max-md:max-w-full bg-white flex-grow'>
      <Header/>
      <Hero/>
      <Features/>
      <CustomFooter/></div>
    </div>
  )
}
