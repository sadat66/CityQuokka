import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  backgroundColor: string;
  borderColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, backgroundColor, borderColor }) => {
  return (
    <div className={`flex flex-col grow justify-center px-12 py-14 w-full text-3xl tracking-tighter leading-8 text-center text-black ${backgroundColor} rounded-lg border-black border-solid border-[3px] font-[596] max-md:px-5 max-md:mt-8`}>
      <div className={`px-9 py-14 bg-white rounded-lg ${borderColor} border-solid border-[3px] max-md:px-5`}>
        {title}
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    { title: "Design a deal that works for your business", backgroundColor: "bg-green-500", borderColor: "border-green-500" },
    { title: "We send you new customers", backgroundColor: "bg-yellow-500", borderColor: "border-yellow-500" },
    { title: "You convert them into repeat customers", backgroundColor: "bg-violet-400", borderColor: "border-violet-400" }
  ];

  return (
    <section>
      <Image
        src="/divider.svg"
        alt="div"
        width={1120}
        height={3}
        className='pt-20'
      />
      <div className="mt-24 w-full max-w-[1121px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
      {/* Add 500px white space below the Features section */}
      <div className="h-[700px] bg-white"></div>
    </section>
  );
};

export default Features;
