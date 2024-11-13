import React from "react";

interface RecommendationProps {
  text: string;
}

const Recommendation: React.FC<RecommendationProps> = ({ text }) => (
  <>
    <div className="mt-3 ml-3 tracking-tighter font-[596] w-[207px] max-md:ml-2.5 text-[16px]">
      {text}
    </div>
    <div
      className="flex shrink-0 mt-4 ml-3 bg-zinc-300 h-[156px] w-[194px] max-md:ml-2.5"
      aria-hidden="true"
    />
  </>
);

const Sidebar: React.FC = () => {
  const recommendations = [
    "Discover places and find a variety of global cuisines to satisfy your cravings.",
    "Discover places and find a variety of global cuisines to satisfy your cravings.",
    "Discover places and find a variety of global cuisines to satisfy your cravings.",
    "Discover places and find a variety of global cuisines to satisfy your cravings.",
  ];

  return (
    <aside
      data-layername="column"
      className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
    >
      <div className="flex flex-col items-start px-9 pb-14 mb-2.5 w-full text-xl leading-5 text-black bg-yellow-500 rounded-md relative max-md:px-5 max-sm:pt-8 max-sm:pl-16">
        {/* "What's on" Heading */}
        <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
          Recommended
        </div>

        {/* Recommendation List */}
        <div className="pt-12">
          {" "}
          {/* Adds spacing for the recommendations */}
          {recommendations.map((text, index) => (
            <Recommendation key={index} text={text} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
