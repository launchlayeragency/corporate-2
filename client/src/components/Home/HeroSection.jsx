
import acImg from "../../assets/images/AC.png"

const HeroSection = () => {

  const backgroundImageUrl = 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg'; 
  

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`,
    backgroundColor: '#0369a1', 
    minHeight: '80vh'
  };

  return (
    <div className="overflow-hidden">
      <section 
        className="relative pt-20 pb-12 bg-fixed text-white bg-cover bg-center bg-no-repeat"
        style={backgroundStyle}
      >
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center h-full">
          <div className=" mx-auto space-y-6 z-10">
            <div className='inline-block bg-white rounded-full px-3 py-1'>
                <h3 className='text-black'> CoolAir X1000</h3>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Stay Cool, Stay Comfortable
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 w-[80%] md:w-[60%] mx-auto">
              Engineered for modern living, it combines powerful performance, energy efficiency, and smart technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 backdrop-blur-md text-white font-medium rounded-lg transition duration-300 border border-white/30 shadow-lg hover:shadow-xl">
                Buy Now
              </button>
            </div>
          </div>
          
          {/*  Air Conditioner Image */}
          <div className="mt-6 w-full max-w-3xl flex items-center justify-center z-50">
            <img 
              src={acImg} 
              alt="CoolAir X1000 Air Conditioner" 
              className="w-full h-full max-h-96 object-cover  "

            />
          </div>
        </div>
        
        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-900/50 z-0"></div>
      </section>
    </div>
  );
};

export default HeroSection;