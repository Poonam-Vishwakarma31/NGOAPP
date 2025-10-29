// HeroSection.jsx
import React from "react";
import heroImage from "../assets/hero.jpg"; // Replace with your image path

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[110vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Needy Tail
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          Help Ever, Hurt Never
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
            Donate Now
          </button>
          <button className="bg-white hover:bg-gray-200 text-black font-semibold px-6 py-3 rounded-lg transition duration-300">
            Adopt Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


