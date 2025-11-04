import React from "react";


const Donate = ({ onDonateClick }) => {
  
  return (
    <div
      id="donate"
      className="relative bg-[#8B7422] min-h-[70vh] flex items-center justify-center flex-col mt-8 px-4 sm:px-6 lg:px-12 text-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        <h5 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mb-4">
          Donate to Needy Tail
        </h5>

        <p className="text-white text-4xl sm:text-base md:text-base lg:text-5xl font-medium font-bold leading-relaxed mb-6">
           Every contribution, big or small, makes a significant impact on the lives of these vulnerable creatures.
        </p>

        <div className="mt-6">
          <button
            onClick={() => onDonateClick()}
            className="bg-white hover:bg-gray-300 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition duration-300"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;

