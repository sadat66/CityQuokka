import React from 'react';

interface CustomDividerProps {
  text: string; // Define the type of the 'text' prop as a string
}

const CustomDivider: React.FC<CustomDividerProps> = ({ text }) => {
  return (
    <div className="relative flex justify-center items-center my-6 w-full">
      {/* Full width horizontal line */}
      <div className="absolute inset-0 flex items-center w-full z-0"> {/* z-0 to place line behind text */}
        <div className="w-full border-[3px] border-gray-200" />
      </div>
    
      {/* Button with fixed width of 350px */}
      <div className="w-[350px] px-4 py-1 bg-white rounded-[8px] border-[3px] border-black z-10">
        <span className="text-black font-bold text-lg text-center block">
          {text || ''} {/* Dynamically render the passed text, or leave empty if no text */}
        </span>
      </div>
    </div>
  );
};

export default CustomDivider;
