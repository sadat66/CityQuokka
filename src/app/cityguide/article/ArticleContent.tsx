
import React from "react";
import Image from "next/image";

const ArticleContent: React.FC = () => {
  return (
    
    <div className="flex z-10 flex-col mr-0 w-full max-md:max-w-full">
    <div className="flex flex-col items-start pl-11 text-3xl text-black max-md:pl-5 max-md:max-w-full">
      
      <Image
          src="/food2.png"
          alt="mp"
          width={736}
          height={375}
          className="object-contain max-w-full rounded-md"
        />
      <Image
          src="/divider.svg"
          alt="mp"
          width={736}
          height={3}
          className="object-contain mt-24 max-w-full aspect-[125] w-[738px] max-md:mt-10"
        />
      
      <h1 className="mt-7 text-[92px] font-bold leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-9 text-start">
  Best things to do in Sydney this December
</h1>

      <p className="mt-16 tracking-tighter leading-10 font-[596] max-md:mt-10 max-md:max-w-full">
        See out spring with a host of community festivals, gigs and long-awaited art exhibitions
      </p>
      <time data-layername="wednesday30October2024" className="self-stretch mt-7 tracking-tighter leading-none font-[281] max-md:max-w-full">
        Wednesday 30 October 2024
      </time>
    </div>
    <div className="mt-6 max-w-full w-[684px]">
      <div className="flex gap-5 max-md:flex-col">
        <div data-layername="column" className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-base font-bold tracking-tight leading-snug text-black whitespace-nowrap max-md:mt-10 max-sm:mb-6">
            <div className="flex shrink-0 self-end rounded-full bg-zinc-300 h-[172px] w-[187px] max-sm:pl-5 max-sm:ml-24 max-sm:h-[171px] max-sm:w-[193px]" aria-hidden="true" />
            <div className="flex shrink-0 gap-3.5 h-9 bg-white rounded-md w-[87px]" aria-hidden="true" />
            <button data-layername="share" className="self-center px-9 py-3.5 w-28 max-w-full bg-yellow-500 rounded-lg border-yellow-500 border-solid border-[3px] max-md:px-5">
              Share
            </button>
          </div>
        </div>
        <div data-layername="column" className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <p data-layername="writtenByJohnWastnageCoFounderCityQuokka" className="mt-11 text-3xl tracking-tighter leading-10 text-black font-[281] max-md:mt-10">
            Written by John Wastnage <br /> Co-founder City Quokka
          </p>
        </div>
      </div>
    </div>
  </div>
            
    
  );
};

export default ArticleContent;
