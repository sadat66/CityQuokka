import React from 'react';

const ShowMoreButton = ({ bgColor = 'bg-violet-400', hoverColor = 'hover:bg-violet-500' }) => {
  return (
    <div className="w-full relative flex justify-center items-center my-6">
      {/* Full width horizontal line */}
      <div className="absolute inset-0 flex items-center w-full">
        <div className="w-full border-[3px] border-gray-200" />
      </div>
      
      {/* Button */}
      <button 
        className={`relative px-4 py-1 text-sm ${bgColor} ${hoverColor} 
                    text-white rounded-full transition-colors duration-200`}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMoreButton;
