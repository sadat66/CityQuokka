
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Header() {
  return (<div className="flex flex-col w-full bg-white">
    <div className="flex flex-col self-center w-full max-w-[1122px] max-md:max-w-full bg-white">
    <div className="flex gap-2.5 self-end text-lg tracking-tight leading-snug text-black font-[494] max-md:mr-0.5">
      <div className="grow my-auto">SignUp / LogIn</div>
      <div className="flex shrink-0 w-10 h-10 rounded-full bg-zinc-300" />
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8828b7bc9dbef5c5182485072583a391083df5c56d00ff0a4ebb71cabedf9ece?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
      className="object-contain self-center max-w-full aspect-[3.37] w-[357px]"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7e7e68441016ae30bdd5c7d3489f113b30ba7cfde2fe40abe4a2360b879b9d?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
      className="object-contain mt-5 w-full aspect-[250] max-md:mr-0.5 max-md:max-w-full"
    />
   <div className="flex gap-9 self-center mt-5 ml-7 max-w-full text-2xl leading-snug text-black font-[375]">
  <div className="font-bold">Home</div>
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f5e686c23a0b9c190eb9f5d87b794b7204cc5c7d6eec1e10cb99244037b8707?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
    className="object-contain shrink-0 self-start w-0.5 aspect-[0.06]"
  />
  <button className="whitespace-nowrap">City Guide</button>
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f5e686c23a0b9c190eb9f5d87b794b7204cc5c7d6eec1e10cb99244037b8707?placeholderIfAbsent=true&apiKey=2971de6381de4a0cbe16d70b520eabb1"
    className="object-contain shrink-0 self-start w-0.5 aspect-[0.06]"
  />
  <button className="text-[25px] whitespace-nowrap">I’m a Business</button>
</div>
</div>
    </div>
  )
}
