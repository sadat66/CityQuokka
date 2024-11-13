import CustomFooter from '@/app/sharedcomponents/CustomFooter'
import Header from '@/app/sharedcomponents/Header'
import React from 'react'
import CityHeader from '../CityHeader'
import NightBody from './NightBody'
import CustomDivider from '@/app/sharedcomponents/CustomDivider'
import Carousel from '@/app/sharedcomponents/Carousel'

export default function page() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
        <div className='flex flex-col self-center w-full max-w-[1120px] max-md:max-w-full bg-white flex-grow'>
      <Header />
      <CityHeader/>
      <NightBody/>
      <CustomDivider text="Late night city guides" />
      <Carousel/>
      <CustomDivider text="Non drinking activities" />
      <Carousel/>
      <CustomDivider text="Late night deals" />
      <Carousel/>
      <CustomFooter/>
      </div>
    </div>
  )
}
