import React from "react";
import video from "../../assets/v1.mp4";
import founder from "../../assets/founder.webp";

const Info = () => {
  return (
    <>
      <div className=" flex justify-evenly  p-4 w-full h-screen bg-cover bg-gray-200   ">
        <div className=" flex flex-col justify-between p-2 ">
          <h2 className="text-3xl  font-semibold  text-red-700 italic ">
            "Until one has loved an animal, a part of one's soul remains
            unawakened."
          </h2>
          <p className="text-sm text-clip text-gray-700">
            At Needy Tail, we believe every life—no matter how
            small—deserves love, care, and a safe home. Our mission is to<br/>
            rescue, protect, and nurture animals in need while spreading
            compassion and awareness in our communities.<br/> Together, we can be
            their voice and make the world kinder, one paw at a time. 🐾
          </p>
          <div className="justify-end me-2">
            <video
              src={video}
              autoPlay
              loop
              muted
              controls
              className="rounded-2xl shadow-lg w-[60%] max-w-5xl "
            />
          </div>
        </div>
        <div className="bg-gray-200 text-black flex flex-col space-y-6 me-4">
          <section className="bg-[#f0fdfa] rounded-2xl shadow-md p-2 text-center hover:shadow-lg transition border-[#14504B]">
            <img
              src={founder}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3>Kartik Singh Tanwar</h3>
            <p>Founder & Animal Welfare Advocate</p>
          </section>
          <section className="bg-[#f0fdfa] rounded-2xl shadow-md p-2 mb-4 text-center hover:shadow-lg transition border-[#14504B]">
            <img
              src={founder}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3>Maan Events</h3>
            <p>Co-founder & Digital Head</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Info;
