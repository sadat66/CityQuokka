import React from "react";
import Header from "../sharedcomponents/Header";
import CityHeader from "./CityHeader";
import Carousel from "../sharedcomponents/Carousel";
import ShowMoreButton from '../sharedcomponents/ShowMoreButton';
import CityBody from "./CityBody";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col self-center w-full max-w-[1120px] max-md:max-w-full bg-white flex-grow">
        <Header />

        <CityHeader />
        <CityBody/>
        <Carousel/>
    <ShowMoreButton/>
    <Carousel/>
    <ShowMoreButton bgColor="bg-[#00CA44]" hoverColor="hover:bg-[#00CA44]" />
    
      </div>
    </div>
  );
}
