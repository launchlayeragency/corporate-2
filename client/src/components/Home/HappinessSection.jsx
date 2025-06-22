import React from "react";

const HappinessSection = () => {
  return (
    <div className=" py-12 md:py-24">
      <div className="flex flex-col md:flex-row-reverse  overflow-hidden ">
        {/* Right side */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Professional air conditioning installation"
            className="w-full h-[400px] md:h-full object-cover"
          />
        </div>

        {/* Left side  */}
        <div className="w-full md:w-1/2 bg-blue-600/90 backdrop-blur-md text-white p-8 md:p-12 flex items-center">
          <div className=" ">
            <p className="text-xl md:text-2xl leading-relaxed w-[85%] pl-12">
              Bringing happiness and comfort to every customer with top-tier air conditioning solutions designed for ultimate cooling satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappinessSection;