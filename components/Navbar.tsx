"use client";

import { Maximize, Minimize } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <nav className="w-full max-md:py-2 max-md:top-0 py-4 fixed top-2 left-0 flex justify-between items-center px-6 shadow-md">
      <h1 className="text-blue-700 font-bold text-2xl text-center">
        CC Mana Truck
      </h1>
      <button
        onClick={toggleFullscreen}
        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 cursor-pointer"
      >
        {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
