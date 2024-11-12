import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function CustomFooter() {
  return (
    <div className="flex flex-col items-center px-20 pb-16 mt-24 w-full bg-zinc-100 bg-opacity-90 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[645px]">
        <div className="self-center text-4xl tracking-tighter leading-snug text-center text-black font-[596] pt-10">
          Join the Mailing List
        </div>
        <div className="flex flex-wrap mt-11 w-full leading-snug max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto gap-6 self-stretch py-2 pr-3.5 pl-3.5 text-3xl tracking-tighter bg-white rounded-md border border-black border-solid min-h-[55px] text-zinc-400 w-[450px] max-md:mr-0 max-md:max-w-full">
            Email Address
          </div>
          <button className="gap-6 self-stretch px-9 py-3 text-2xl font-bold tracking-tight text-white whitespace-nowrap bg-black rounded-md min-h-[57px] max-md:px-5">
            Join
          </button>
        </div>
        <div className="flex gap-3 self-center mt-7 ml-6 max-w-full w-[102px]">
          <button>
            <Image
              src="/tiktok.svg"
              alt="Facebook"
              width={45}
              height={45}
              className="object-contain shrink-0 aspect-[0.94]"
            />
          </button>
          <button>
            <Image
              src="/Ins.svg"
              alt="Facebook"
              width={45}
              height={45}
              className="object-contain shrink-0 aspect-[0.94]"
            />
          </button>
        </div>
        <div className={inter.className}>
          <p className="text-black mt-10 text-center">
            We acknowledge the traditional custodians of the land on which we
            live, work and play, and pay respects to all Elders past and
            present, and emerging.
          </p>
        </div>
      </div>
    </div>
  );
}
