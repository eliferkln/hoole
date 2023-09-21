import React from "react";

const Hero = () => {
  return (
    <div className="w-full mx-auto ">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Millions of movies,{" "}
            <span className="text-[#72e9ae]">TV shows, </span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-[#72e9ae]">and people to discover.</span>{" "}
            Explore now.
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover  "
          src="/assets/film.png"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
