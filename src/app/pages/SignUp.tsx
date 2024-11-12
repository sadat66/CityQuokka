import React from "react";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const Signup = () => {
  return (
    <div className="container mx-auto my-16 py-12">
      {/* Main Signup Component */}
      <div className="relative bg-[#B388FF] w-[1122px] rounded-3xl px-4 pt-16 pb-16 text-center mx-auto">
        {/* Top floating button */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <button className="w-[235px] h-[48px] flex-shrink-0 rounded-lg border-4 border-black bg-white text-black font-bold">
            SIGN UP / LOG-IN
          </button>
        </div>

        {/* Main content */}
        <h2 className="text-black text-xl leading-snug font-[490] py-4 px-[90px]">
          Unlock Your Sydney: Get personalised recommendations, save your
          favourites, and be the first to know about upcoming events, special
          offers, and more.
        </h2>

        <h3 className="text-black text-2xl font-semibold mt-4 ">
          Sign up now for your tailored guide to new experiences
        </h3>

        {/* Bottom floating buttons */}
        <div className="absolute bottom-0 left-0 transform translate-y-1/2 w-full flex justify-around px-4">
          <button className="flex w-[351px] px-8 py-3 justify-center items-center gap-2 bg-black border-2 border-white rounded-full font-bold">
            Sign Up
          </button>
          <button className="flex w-[352px] px-8 py-3 justify-center items-center gap-2 bg-white border-2 border-black rounded-full text-black font-bold">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
