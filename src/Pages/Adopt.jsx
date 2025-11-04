import React from "react";

const Adopt = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5]  md:p-20 space-y-10">
      <h1
        style={{ color: "orange" }}
        className="text-4xl font-bold text-center mb-8"
      >
        Adopt a Pet
      </h1>
      <p
        style={{ color: "GrayText" }}
        className="text-2xl  max-w-3xl mx-auto text-center mt-4 mb-8"
      >
        "Every adoption writes a new story of hope and kindness."
          "Open your heart and home — adopt, don’t shop."
      </p>
      <div className="justify-items-center mt-4">
        <button className="bg-blue-600  hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          View Available Pets
        </button>
      </div>
      <div className="mt-10 w-full max-w-4xl">
        <img
          src="./src/assets/adoptme.webp"
          alt="Adopt a Pet Banner"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="max-w-4xl text-center mt-10">
        <h2 style={{ color: "red" }} className="text-3xl font-semibold mb-4">
          Adoption Process
        </h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
          <li>Browse our list of available pets.</li>
          <li>Fill out the adoption application form.</li>
          <li>Attend a meet-and-greet with the pet.</li>
          <li>Complete the adoption paperwork.</li>
          <li>Welcome your new furry friend home!</li>
        </ol>
      </div>
    </div>
  );
};

export default Adopt;
