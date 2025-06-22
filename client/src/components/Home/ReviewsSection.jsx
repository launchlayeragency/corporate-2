import React from 'react';
import { FaStar } from 'react-icons/fa';
import Testimonial from './Testimonial';

const ReviewsSection = () => {
  // Review summary data
  const reviewStats = [
    { stars: 5, count: 50, percentage: 50 },
    { stars: 4, count: 70, percentage: 70 },
    { stars: 3, count: 30, percentage: 30 },
    { stars: 2, count: 10, percentage: 10 },
    { stars: 1, count: 20, percentage: 20 }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4  w-[80%] ">
          <h2 className="text-7xl font-bold mb-8">Reviews</h2>

        <div className="flex flex-col lg:flex-row gap-12 mb-16 ">
          {/* Left Side - Rating Breakdown */}
          <div className="lg:w-1/2">
          
            
            {/* Star Rating Breakdown ............*/}
            <div className="space-y-4">
              {reviewStats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className=" text-gray-700 font-medium">
                    {stat.stars} star
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-yellow-400 h-2.5 rounded-full" 
                        style={{ width: `${stat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-10 text-gray-600 text-right">{stat.count}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Overall Rating */}
          <div className="lg:w-1/2 flex flex-row gap-3 items-center lg:items-start">
            <div className="text-6xl font-bold ">8.5</div>
            <div className="flex flex-col  ">
                <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
            </div>
            <div className="text-gray-600">1800 reviews</div>
            </div>
          </div>
        </div>
        
     
      </div>
         {/* Testimonial Slider Section */}
        <Testimonial />
    </section>
  );
};

export default ReviewsSection;