/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

export default function Body() {
  return (
    <div className="flex self-center w-full max-w-[1122px] max-md:max-w-full bg-white pt-16">
      {/* Left Section with fixed 682px width */}
      <div className="flex flex-col relative" style={{ width: "682px" }}>
        <Image
          src="/Melbourne.png" // Replace with your image path
          alt="Sample Image"
          width={685}
          height={543}
          className="object-cover rounded-md"
        />
      </div>

      <div>
        <div
          className="border-black border-solid border-[3px] flex flex-col items-start pt-28 pr-1 pb-56 pl-12 ml-auto text-black bg-green-500 rounded-md max-md:py-24 max-md:pl-5 max-md:max-w-full"
          style={{ width: "440px", height: "543px" }}
        >
          <div className="text-black text-[25px] font-author font-bold leading-[33.25px] tracking-[-1.05px] uppercase pb-4 flex justify-between items-center w-full">
            <div className="flex-1">
              It’s Sydney Marathon weekend and you can build up to Sunday’s race
              with our fave clubbing.
            </div>
            <button className="self-end text-white">
              {" "}
              <Image
                src="/mingcute_arrows-down-line.svg" // Replace with your image path
                alt="Sample Image"
                width={38}
                height={30}
                className="object-cover rounded-md"
              />{" "}
            </button>
          </div>

          <button className="flex w-[112.32px] h-[36px] p-[14.009px_22.415px] justify-center items-center gap-[14.009px] flex-shrink-0 rounded-[6px] bg-white text-black font-semibold whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
