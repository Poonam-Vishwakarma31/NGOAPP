import React from 'react'

const Donate = () => {
  return (
    <div className='min-h-screen items-center justify-center bg-[#F5F5F5]  md:p-20'>
      <h1 style={{color:'orange'}} className=" text-3xl font-bold text-center  mt-6 mb-10">Donate and Make a Difference </h1>
        {/* Intro Text */}
      <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto mt-4">
        Your generous contribution helps <span className="text-orange-600 font-semibold">Needytail</span> 
        rescue, care for, and provide shelter to countless animals in need.  
        Every donation — big or small — brings us one step closer to giving them a better life.
      </p>
      {/* Donation Options */}
      <div className="bg-[#FFFDD0] p-6 md:p-10 w-full md:w-1/2 rounded-lg shadow-lg mt-8 mx-auto">
          <div className="space-y-6">
             <h5 className="text-xl font-semibold text-gray-800 mb-4">In person</h5>
            </div>
      </div>
    </div>
  )
}

export default Donate
