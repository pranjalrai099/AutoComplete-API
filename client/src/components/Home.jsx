import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-6">Welcome to Home Page</h1>
      <div className="flex flex-col gap-4">
        <Link to="/v1">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Go to V1
          </button>
        </Link>
        <Link to="/v2">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Go to V2
          </button>
        </Link>
        <Link to="/v3">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Go to V3
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
