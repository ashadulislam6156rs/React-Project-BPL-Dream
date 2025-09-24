import React from "react";

const Banner = () => {
  return (
      <div className="max-w-7xl mx-auto p-10 ">
          <div className="relative bg-[url('/assets/banner_bg.png')]  bg-cover bg-no-repeat rounded-xl overflow-hidden h-[400px] flex items-center justify-center text-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 text-white">
        <img
          src="/assets/banner-main.png"
          alt="Logo"
          className="mx-auto mb-4 w-36 h-36"
        />
        <h1 className="text-xl md:text-3xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-sm md:text-lg mb-6 text-gray-400">
          Beyond Boundaries, Beyond Limits
        </p>
        <div className="rounded-lg p-1 border-2 border-[#E7FE29] w-[185px] mx-auto cursor-pointer"><button
          type="button"
          className="cursor-pointer px-6 py-3 bg-[#E7FE29] rounded-lg font-semibold shadow-lg transition text-black"
        >
          Claim Free Credit
        </button></div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
