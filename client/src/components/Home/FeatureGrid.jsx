const FeatureGrid = () => {
  const features = [
    {
      id: "01",
      title: "Energy Saving",
      description: "Designed to consume minimal power, reducing your electricity bills without compromising performance.",
      imgUrl: "https://images.unsplash.com/photo-1545126178-862cdb469409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "02",
      title: "Quiet Operation",
      description: "Operates at a low noise level, ensuring a peaceful environment for work or rest.",
      imgUrl: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "03",
      title: "Smart Wi-Fi",
      description: "Allows users to control the AC remotely using a smartphone app or voice assistants like Alexa.",
      imgUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "04",
      title: "Turbo Cooling",
      description: "Instant cooling by operating the AC at maximum capacity for quick temperature adjustment.",
      imgUrl: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className=" ">
      {/* First Row: Text - Image - Text - Image */}
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {features.slice(0, 2).map((feature) => (
          <div key={feature.id} className="contents">
            <div className="bg-blue-600 text-white p-6 flex flex-col items-start justify-center "> 
                <h2 className="text-lg font-semibold mb-4 text-left ">{feature.id}</h2>
              <h3 className="text-xl font-bold mb-3 text-left">{feature.title}</h3>
              <p className="text-sm lg:text-base text-left">{feature.description}</p> 
            </div>
            <div className="overflow-hidden">
              <img 
                src={feature.imgUrl} 
                alt={feature.title}
                className="w-full h-full object-cover max-h-[300px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: Image - Text - Image - Text */}
      <div className="grid grid-cols-1 sm:grid-cols-4">
        {features.slice(2, 4).map((feature) => (
          <div key={feature.id} className="contents">
            <div className="overflow-hidden">
              <img 
                src={feature.imgUrl} 
                alt={feature.title}
                className="w-full h-full object-cover max-h-[300px]"
              />
            </div>
            <div className="bg-blue-600 text-white p-6 flex flex-col justify-center "> 
              <h2 className="text-lg font-semibold mb-4 text-right">{feature.id}</h2>
              <h3 className="text-xl font-bold mb-3 text-left">{feature.title}</h3>
              <p className="text-sm lg:text-base text-left">{feature.description}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;