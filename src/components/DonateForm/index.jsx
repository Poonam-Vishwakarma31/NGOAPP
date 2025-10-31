import React, { useState } from "react";

const DonatePopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-11/12 max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 style={{color:'gray'}} className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Make a Donation
        </h2>

        {/* Your form here */}
        <form style={{color:'black'}} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="number"
            placeholder="Donation Amount"
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonatePopup;