// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => (
  <div>
    {/* Hero Section */}
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#252B42] text-white px-6 md:px-10 py-16">
      <h5 className="text-lg font-bold mb-4" style={{ color: "#23A6F0" }}>
        Welcome
      </h5>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: "#FFFFFF", lineHeight: '80px' }}>
        Selling on the internet like a pro
      </h1>

      <h4 className="text-base md:text-xl text-center mb-8" style={{ color: "#FFFFFF", lineHeight: '30px' }}>
        We know how large objects will act, but things on a small scale just do not act that way.
      </h4>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-[#23A6F0] py-3 px-6 rounded font-semibold hover:bg-[#1e8cc4]">
          Get Quote Now
        </button>
        <button className="border border-[#23A6F0] text-[#23A6F0] py-3 px-6 rounded font-semibold hover:bg-[#1e8cc4] hover:text-white">
          Learn More
        </button>
      </div>
    </div>

    {/* Training Courses Section */}
    <div className="container mx-auto px-6 md:px-10 py-16 bg-[#252B42] text-white">
      <h2 className="text-3xl font-semibold mb-8 text-center">Training Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white text-[#252B42] rounded-lg shadow-lg p-6">
          <div className="bg-[#FFDCD1] p-4 rounded-t-lg text-center">
            <h3 className="text-lg font-bold">training Courses</h3>
          </div>
          <div className="h-0.5 w-12 bg-[#E74040] mx-auto my-4"></div>
          <p className="text-sm text-gray-600">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-[#252B42] rounded-lg shadow-lg p-6">
          <div className="bg-[#B9EAA8] p-4 rounded-t-lg text-center">
            <h3 className="text-lg font-bold">2,769 online Courses</h3>
          </div>
          <div className="h-0.5 w-12 bg-[#E74040] mx-auto my-4"></div>
          <p className="text-sm text-gray-600">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#23A6F0] text-white rounded-lg shadow-lg p-6">
          <div className="bg-white text-[#252B42] p-4 rounded-t-lg text-center">
            <h3 className="text-lg font-bold">training Courses</h3>
          </div>
          <div className="h-0.5 w-12 bg-white mx-auto my-4"></div>
          <p className="text-sm">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
