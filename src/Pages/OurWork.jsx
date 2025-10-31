import React from "react";

const OurWork = () => {
  return (
    <div className="min-h-screen  items-center justify-center bg-[#F5F5F5]  md:p-20 space-y-10">
       <h1 style={{color:'orange'}} className=" text-3xl font-bold text-center  mt-3">Our Work</h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto mt-4">
        At <span className="font-semibold text-orange-600">Needytail</span>, we
        are committed to protecting and improving the lives of animals through
        rescue, medical care, adoption, awareness, and community involvement.
      </p>
    
      {/* Work Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          {/* Rescue & Shelter */}
          <div className="bg-[#FFFDD0] rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img
            src="./src/assets/rescue.webp"
            alt="Animal Rescue"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 style={{color:'red'}} className="text-2xl font-semibold text-orange-600 mb-3">
            Animal Rescue & Shelter
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We rescue injured, abandoned, and abused animals, offering them safe
            shelter, medical aid, and compassion until they find a loving home.
          </p>
        </div>
        {/* Medical Care & Rehabilitation */}
         <div className="bg-[#FFFDD0] rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img
            src="./src/assets/medicare.webp"
            alt="Medical Care"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 style={{color:'red'}} className="text-2xl font-semibold text-orange-600 mb-3">
            Medical Care & Vaccination
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our veterinary team conducts free vaccination and sterilization
            drives to control stray populations and ensure every animal’s
            well-being.
          </p>
        </div>
        {/* Adoption Drives */}
         <div className="bg-[#FFFDD0] rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img
            src="./src/assets/adopt.jpg"
            alt="Adoption Program"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 style={{color:'red'}} className="text-2xl font-semibold text-orange-600 mb-3">
            Adoption & Fostering
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Through our adoption drives, we connect rescued animals with caring
            families, ensuring every pet gets a second chance at happiness.
          </p>
        </div>
        {/* Awareness Campaigns */}
         <div className="bg-[#FFFDD0] rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img
            src="./src/assets/awareness.jpg"
            alt="Awareness Campaign"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 style={{color:'red'}} className="text-2xl font-semibold text-orange-600 mb-3">
            Awareness & Education
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We organize workshops, campaigns, and school visits to spread
            awareness about animal rights and responsible pet care.
          </p>
        </div>

        {/* Community Involvement */}
        <div className="bg-[#FFFDD0] rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <img
            src="./src/assets/community.jpg"
            alt="Community Work"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 style={{color:'red'}} className="text-2xl font-semibold text-orange-600 mb-3">
            Community Involvement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collaborate with local communities to set up feeding zones,
            provide clean water, and build safer spaces for stray animals.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default OurWork;
