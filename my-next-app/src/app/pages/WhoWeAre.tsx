

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */import React from 'react'

export default function WhoWeAre() {
  return (
    <div className="mt-28 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center items-center px-16 py-24 w-full bg-green-500 rounded-lg border-black border-solid border-[3px] max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/399e51aa847e0379b4d4316a9742d1fc0e722a61bdbaab197531e8ba6c373070?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
              className="object-contain max-w-full rounded-none aspect-[1.08] w-[138px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-16 pb-24 w-full text-2xl font-bold tracking-tighter leading-none text-center text-black uppercase bg-yellow-500 rounded-lg border-black border-solid border-[3px] max-md:px-5 max-md:mt-8">
            <div className="z-10 px-5 py-4 mt-0 bg-white rounded-lg border-black border-solid border-[3px]">
              WHO ARE WE
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d589b15e7268d8424c965d7d6b13a1b096c59b0d28f1633d5a0831d266d29c7f?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
              className="object-contain self-center mt-16 max-w-full aspect-[1.24] w-[153px] max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-16 pt-0.5 pb-16 w-full bg-violet-400 rounded-lg border-black border-solid border-[3px] max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/491172901c2ca1c47f99059789e3b303d57169fc18cdc0d2a491bd44c5bb4938?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
              className="object-contain aspect-[0.72] w-[174px]"
            />
          </div>
        </div>
      </div>  <div className="mt-8 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="grow px-11 py-14 w-full text-3xl tracking-tighter leading-8 text-center text-black bg-white rounded-lg border-green-500 border-solid border-[3px] font-[596] max-md:px-5 max-md:mt-8">
            A smart guide to your city that personalises to your interests
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="grow px-9 py-10 w-full text-3xl tracking-tighter leading-8 text-center text-black bg-white rounded-lg border-yellow-500 border-solid border-[3px] font-[596] max-md:px-5 max-md:mt-8">
            We find and recommend the best experiences and negotiate special
            deals for our users.
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="grow px-9 py-10 w-full text-3xl tracking-tighter leading-8 text-center text-black bg-white rounded-lg border-violet-400 border-solid border-[3px] font-[596] max-md:px-5 max-md:mt-8">
            No endless lists or overwhelming choices, just hand-picked options
            that you’ll love.
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
