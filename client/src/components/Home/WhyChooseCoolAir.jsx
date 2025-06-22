const WhyChooseCoolAir = () => {
    const features = [
        {
            title: "Smart Schedules",
            description:
                "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
            bgColor: "bg-blue-700",
        },
        {
            title: "Self-Cleaning System",
            description:
                "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
            bgColor: "bg-blue-500",
        },
        {
            title: "Child Lock Safety",
            description:
                "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
            bgColor: "bg-blue-700",
        },
        {
            title: "Voice Control",
            description:
                "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
            bgColor: "bg-blue-500",
        },
        {
            title: "Auto Diagnostic System",
            description:
                "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
            bgColor: "bg-blue-700",
        },
        {
            title: "Adaptive Sleep Mode",
            description:
                "Trust us to deliver reliable solutions and exceptional service, and peace of mind for your HVAC needs.",
            bgColor: "bg-blue-500",
        },
    ];

    return (
        <div className=" mx-auto px-4 py-20 bg-slate-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
                    Why Choose CoolAir
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start rounded-lg overflow-hidden"
                        >
                            {/* Left side with icon */}
                            <div
                                className={`${feature.bgColor} text-white p-3 rounded-lg flex-shrink-0`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 md:h-10 md:w-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            {/* Right side with content */}
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                                <p className="text-gray-600 mt-2 md:w-[85%]">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default WhyChooseCoolAir;