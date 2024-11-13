import React from "react";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="px-4">
      <div className="relative bg-[#B388FF] w-full max-w-[1122px] mx-auto rounded-3xl px-4 pt-16 pb-16 text-center">
        {/* Top floating button */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <button className="w-[235px] h-[48px] flex-shrink-0 rounded-lg border-4 border-black bg-white text-black font-bold font-inter">
            SIGN UP / LOG-IN
          </button>
        </div>

        {/* Main content */}
        <h2 className="text-black text-xl leading-snug font-[490] py-4 px-4 sm:px-[90px] font-inter"style={{fontWeight: 500}}>
          Unlock Your Sydney: Get personalised recommendations, save your
          favourites, and be the first to know about upcoming events, special
          offers, and more.
        </h2>

        <h3 className="text-black text-2xl font-semibold mt-4 sm:text-3xl">
          Sign up now for your tailored guide to new experiences
        </h3>

        {/* Bottom floating buttons */}
        <div className="absolute bottom-0 left-0 transform translate-y-1/2 w-full flex justify-around px-4 sm:px-8">
          <button className="flex w-[251px] sm:w-[351px] px-8 py-3 justify-center items-center gap-2 bg-black border-2 border-white rounded-full font-bold font-inter">
            Sign Up
          </button>
          <button className="flex w-[252px] sm:w-[352px] px-8 py-3 justify-center items-center gap-2 bg-white border-2 border-black rounded-full text-black font-bold font-inter">
            Log In
          </button>
        </div>
      </div>
      <div className="mt-8 pt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300"></span>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-600">Or Sign Up with</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-6">
          {/* Social Icons */}
          <button className="bg-white p-2 rounded-full ">
            <Image
              src="/Gmail_icon_(2020).svg"
              alt="Google"
              width={24}
              height={24}
            />
          </button>
          <button className="bg-white p-2 rounded-full ">
            <Image
              src="/2021_Facebook_icon.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </button>
          <button className="bg-white p-2 rounded-full ">
            <Image
              src="/Apple_logo_black.svg"
              alt="Apple"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
