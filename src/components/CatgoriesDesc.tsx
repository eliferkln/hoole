import React from "react";

const CatgoriesDesc = () => {
  return (
    <div className="w-full bg-white py-16  ">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[400px] h-[300px] mx-auto my-4"
          src="/assets/categories.png"
          alt="/"
        />
        <div className="flex flex-col justify-center px-6">
          <p className="text-[#72e9ae] font-bold text-2xl ">
            Watch by Categories
          </p>
          <h1 className="md:text-2xl sm:text-xl text-xl font-bold py-2">
            Millions of movies, TV shows, and people to discover. Explore now.
          </h1>
          <p className="">
            Watch movies the way they were meant to be seen - in stunning high
            definition, with crisp sound, and uninterrupted streaming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatgoriesDesc;
