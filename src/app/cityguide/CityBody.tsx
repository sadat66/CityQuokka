import React from 'react';

export default function CityBody() {
  return (
    <div>
      <div className="flex flex-col w-full sm:w-[33%] max-md:w-full relative mt-10">
        <div className="flex flex-col grow px-10 pb-8 pt-4 w-full text-2xl font-bold tracking-tighter leading-none text-center text-black bg-yellow-500 rounded-lg border-black border-solid border-[3px] max-md:px-5 max-md:mt-8 relative">
          {/* Floating Button */}
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            Trending
          </div>

          <div className="mt-6 space-y-6 font-bold">
            {/* List items */}
            <div className="flex items-center gap-4">
              <span className="text-[90px] text-[#FFFFFFCC]">1</span>
              <p className="text-[18px] text-gray-800 flex-1 text-start">Discover Places And Find A Variety Of Global Cuisines To Satisfy Your Cravings.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[90px] text-[#FFFFFFCC]">2</span>
              <p className="text-[18px] text-gray-800 flex-1 text-start">Discover Places And Find A Variety Of Global Cuisines To Satisfy Your Cravings.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[90px] text-[#FFFFFFCC]">3</span>
              <p className="text-[18px] text-gray-800 flex-1 text-start">Discover Places And Find A Variety Of Global Cuisines To Satisfy Your Cravings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
