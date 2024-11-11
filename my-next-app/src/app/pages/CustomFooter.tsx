/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function CustomFooter() {
  return (
    <div className="flex flex-col items-center px-20 pt-11 pb-16 mt-24 w-full bg-zinc-100 bg-opacity-90 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[645px]">
        <div className="self-center text-4xl tracking-tighter leading-snug text-center text-black font-[596]">
          Join the Mailing List
        </div>
        <div className="flex flex-wrap mt-11 w-full leading-snug max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto gap-6 self-stretch py-1.5 pr-3.5 pl-3.5 text-3xl tracking-tighter bg-white rounded-md border border-black border-solid min-h-[55px] text-zinc-400 w-[450px] max-md:mr-0 max-md:max-w-full">
            Email Address
          </div>
          <div className="gap-6 self-stretch px-9 py-3 text-2xl font-bold tracking-tight text-white whitespace-nowrap bg-black rounded-md min-h-[57px] max-md:px-5">
            Join
          </div>
        </div>
        <div className="flex gap-3 self-center mt-7 ml-6 max-w-full w-[102px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31ea92d9686402c2e15aa7b4022e33a2087c49fef15de9f378c3c794027a6013?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
            className="object-contain shrink-0 aspect-[0.94] w-[45px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b65ecde347dd721980ffdc3442ec6979c8dbf8713660f34b4c0ca1cc5bfa189?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
            className="object-contain shrink-0 aspect-[0.94] w-[45px]"
          />
        </div>
        <div className="mt-14 text-base tracking-tight leading-6 text-center text-black max-md:mt-10 max-md:mr-2 max-md:max-w-full">
          We acknowledge the traditional custodians of the land On which we
          live, work and play, and pay respects to all Elders past and present,
          and emerging
        </div>
      </div>
    </div>
  )
}
