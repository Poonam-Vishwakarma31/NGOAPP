import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row md:space-x-20 space-y-10 
    md:space-y-0 bg-[#F5F5F5] p-5 md:p-20 items-center justify-center">

       {/* Text Section */}
      <div className="bg-[#FFFDD0] p-6 md:p-10 w-full md:w-1/2 rounded-lg shadow-lg">
        <h1 style={{ color: "orange" }} className="text-3xl md-text-4xl font-bold mb-8">
          About Needytail
        </h1>
        <p className="text-base  md:text-lg mt-5 mb-4 text-[#282E2A] leading-relaxed">
          Needytail is a non-profit organization dedicated to protecting and
          improving the lives of animals in need. We work tirelessly to provide
          rescue, shelter, medical care, and nourishment to stray, abandoned,
          and injured animals. Our mission is to create a compassionate world
          where every animal is treated with love, respect, and dignity through
          awareness, adoption drives, and community involvement.
        </p>
        <p className="text-base md:text-lg mb-4 text-[#282E2A] leading-relaxed">
          Founded in 2010, Needytail has been at the forefront of various
          humanitarian projects, collaborating with local
        </p>
      </div>
      
        {/* Image Section */}
      <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
        <img
          src="./src/assets/ngo7.webp"
          alt="Animal Rescue"
          className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md"
        />
        <img
          src="./src/assets/ngo9.webp"
          alt="Animal Care"
          className="w-full h-40 md:h-72 object-cover rounded-lg shadow-md"
        />
        <img
          src="./src/assets/ngo8.webp"
          alt="Adoption Drive"
          className="w-full h-40 md:h-72 object-cover rounded-lg shadow-md"
        />
        <img
          src="./src/assets/ngo6.webp"
          alt="Volunteers with Animals"
          className="w-full h-40 md:h-56 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default About;
