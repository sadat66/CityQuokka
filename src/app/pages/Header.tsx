/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col w-full bg-white pt-8">
      <div className="flex flex-col self-center w-full max-w-[1122px] max-md:max-w-full bg-white">
        <div className="flex gap-2.5 self-end text-lg tracking-tight leading-snug text-black font-[494] max-md:mr-0.5">
          <div className="grow my-auto">SignUp / LogIn</div>
          <button className="flex shrink-0 w-10 h-10 rounded-full bg-zinc-300"></button>
        </div>

        <Image
          className="object-contain self-center max-w-full aspect-[3.37]"
          src="/CQ.svg"
          alt="CQ"
          width={357}
          height={106}
        />
        <div
          className="w-[1120px] h-[4px]"
          style={{ backgroundColor: "#EFEFEF" }}
        ></div>
        <div className="flex gap-9 self-center mt-5 ml-7 max-w-full text-2xl leading-snug text-black font-[375]">
          <button className="font-bold whitespace-nowrap">Home</button>
          <p className="text-4xl">|</p>

          <button className="whitespace-nowrap">City Guide</button>
          <p className="text-4xl">|</p>
          <button className="text-[25px] whitespace-nowrap">
            I’m a Business
          </button>
        </div>
      </div>
    </div>
  );
}
