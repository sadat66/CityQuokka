import * as React from "react";
import Image from "next/image";

function CityHeader() {
  return (
    <div className="pl-[299px] flex flex-wrap gap-5 justify-between items-center w-full py-2 pr-4  mt-9 bg-zinc-100 text-base tracking-tight leading-snug text-black font-[375] max-md:pl-5 max-md:mr-2.5">
      <div className="flex gap-9 items-center">
        <button
          className="my-auto"
          style={{
            fontFamily: "Author",
            fontSize: "18px",
            fontWeight: 400,
          }}
        >
          Nightlife
        </button>
        <p className="text-xl text-white hidden sm:block">|</p>
        <button
          className="my-auto"
          style={{
            fontFamily: "Author",
            fontSize: "18px",
            fontWeight: 400,
          }}
        >
          Sport
        </button>
        <p className="text-xl text-white hidden sm:block">|</p>
        <button
          className="my-auto"
          style={{
            fontFamily: "Author",
            fontSize: "18px",
            fontWeight: 200,
          }}
        >
          Markets
        </button>
        <p className="text-xl text-white hidden sm:block">|</p>
        <button
          className="my-auto"
          style={{
            fontFamily: "Author",
            fontSize: "18px",
            fontWeight: 200,
          }}
        >
          Entertainment
        </button>
        <p className="text-xl text-white hidden sm:block">|</p>
        <button
          className="my-auto"
          style={{
            fontFamily: "Author",
            fontSize: "18px",
            fontWeight: 200,
          }}
        >
          Arts
        </button>
      </div>

      {/* Filter Image at the end */}
      <button>
        <Image
          src="/Filter.svg"
          alt="Filter Icon"
          width={23}
          height={21}
          className="object-cover rounded-md ml-auto"
        />
      </button>
    </div>
  );
}

export default CityHeader;
