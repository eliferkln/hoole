import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/assets/1.png"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-4 pt-4">New Film</p>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/assets/2.png"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white"></div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="/assets/3.png"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
