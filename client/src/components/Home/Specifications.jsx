import React, { useState } from "react";
import { FiDroplet, FiBox, FiZap, FiInfo, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Specifications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const specs = [
    {
      title: "Cooling Performance",
      icon: <FiDroplet className="text-blue-800" size={20} />,
      items: [
        "Cooling Capacity: 18,000 BTU/h",
        "Cooling Area Coverage: Up to 180 sq. ft.",
        "Compressor Type: Rotary/Inverter",
        "Cooling Technology: Fast Cooling, Turbo Mode"
      ]
    },
    {
      title: "Power & Energy Efficiency",
      icon: <FiZap className="text-blue-800" size={20} />,
      items: [
        "Power Supply: 220-240V, 50Hz",
        "Rated Power Input: 1500W",
        "Energy Efficiency Ratio (EER): 3.5",
        "Star Rating: 5-Star (BEE Certified)",
        "Annual Power Consumption: 1200 kWh"
      ]
    },
    {
      title: "Dimensions & Weight",
      icon: <FiBox className="text-blue-800" size={20} />,
      items: [
        "Indoor Unit Dimensions (WxHxD): 900 x 300 x 220 mm",
        "Outdoor Unit Dimensions (WxHxD): 850 x 550 x 300 mm",
        "Weight (Indoor/Outdoor): 12 kg / 35 kg"
      ]
    },
    {
      title: "Additional Information",
      icon: <FiInfo className="text-blue-800" size={20} />,
      items: [
        "Warranty: 1 Year on Product, 10 Years on Compressor",
        "Included Accessories: Remote, Installation Kit, User Manual",
        "Country of Manufacture: Japan/China/India"
      ]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold  mb-12">
          Specifications
        </h2>
        
        <div className="space-y-4">
          {specs.map((spec, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <div className="mr-3 bg-blue-100 p-2 rounded-full">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {spec.title}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <FiChevronUp className="text-blue-800" size={20} />
                ) : (
                  <FiChevronDown className="text-blue-800" size={20} />
                )}
              </button>
              
              <div
                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <ul className="space-y-3">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-800 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specifications;