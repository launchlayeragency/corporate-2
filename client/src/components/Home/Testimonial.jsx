import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from 'react-icons/fa';
import { IoIosQuote } from 'react-icons/io';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Daniel H.",
      role: "Customer",
      text: "From start to finish, their team provided top-notch service, guiding me through the selection process, handling the installation with precision, and ensuring everything was in perfect working order.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah K.",
      role: "Homeowner",
      text: "The cooling performance is exceptional! My home reaches the perfect temperature within minutes, and the energy efficiency has noticeably reduced my electricity bills.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael T.",
      role: "Business Owner",
      text: "We installed these units throughout our office and the difference is night and day. Quiet operation and powerful cooling - exactly what we needed.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 4,
      name: "Jennifer L.",
      role: "Interior Designer",
      text: "I recommend these units to all my clients. The sleek design blends beautifully with modern interiors while delivering outstanding performance.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 5,
      name: "Robert G.",
      role: "Tech Enthusiast",
      text: "The smart features are incredible. Being able to control the temperature from my phone has been a game-changer for my smart home setup.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
      id: 6,
      name: "Emily S.",
      role: "Mother",
      text: "With young kids at home, I appreciate how quietly these units operate. No more worrying about noise during nap times!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      id: 7,
      name: "David P.",
      role: "Architect",
      text: "The installation team was professional and efficient. They worked around our construction schedule and left the site spotless.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
      id: 8,
      name: "Olivia M.",
      role: "Senior Citizen",
      text: "The remote control is so easy to use, and the unit maintains a consistent temperature throughout the day without fluctuations.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 9,
      name: "James W.",
      role: "Restaurant Owner",
      text: "Our kitchen stays cool even during the busiest hours. The durability and performance have exceeded our expectations.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 10,
      name: "Sophia C.",
      role: "Landlord",
      text: "I've installed these in all my rental properties. Tenants love them, and the maintenance requirements are minimal.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
      id: 11,
      name: "William B.",
      role: "Hotel Manager",
      text: "We replaced our old units with these throughout the hotel. Guest complaints about room temperature have dropped to zero.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
      id: 12,
      name: "Ava R.",
      role: "Medical Professional",
      text: "The air quality improvement is noticeable. My allergy symptoms have significantly decreased since installation.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];


  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
      
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}  // Reduced gap between cards
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3, spaceBetween: 20 }, 
              1024: { slidesPerView: 4, spaceBetween: 20 } // Reduced gap
            }}
            className="pb-4" 
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full mx-2 flex flex-col" style={{ minHeight: '350px' }}>
                  <blockquote className="flex flex-col flex-grow relative">
                    <IoIosQuote className="absolute top-0 left-0 text-blue-500 text-2xl" />
                    
                    <div className="flex-grow flex flex-col items-center text-center pt-6">
                      <div className="mb-4 flex flex-col items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md mb-2" 
                        />
                        <div>
                          <h4 className="font-semibold text-md">{testimonial.name}</h4>
                          <span className="text-gray-600 text-xs">{testimonial.role}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 px-3 flex-grow text-sm">"{testimonial.text}"</p>
                      
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} text-md mx-0.5`} 
                          />
                        ))}
                      </div>
                    </div>
                  </blockquote>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="testimonial-pagination flex justify-center mt-4 gap-1" />
        </div>
      </div>

      <style jsx>{`
        .testimonial-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          border-radius: 50%;
          opacity: 1;
          margin: 0 3px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .testimonial-bullet-active {
          background: #F59E0B;
          width: 16px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;