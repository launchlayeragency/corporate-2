
const ComfortSection = () => {
  return (
    <div className="  py-12 md:py-24">
      <div className="flex flex-col md:flex-row  overflow-hidden ">
        {/* Left side  */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Air conditioning unit"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Right side*/}
        <div className="w-full md:w-1/2 bg-blue-600 text-white p-8 md:p-12 flex items-center">
          <p className="text-xl md:text-2xl leading-relaxed w-[85%]">
           Stay cool and comfortable year-round with energy-efficient, smart air conditioning designed for ultimate
            performance, reliability, and effortless climate control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComfortSection;