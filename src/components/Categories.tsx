import React from "react";
import { useApi } from "../context/ApiContext";

const Categories = () => {
  const { genres }: any = useApi();

  return (
    <div className="w-full py-[2rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 gap-4 ">
        {genres.map((movie: any) => (
          <div
            key={movie.id}
            className="w-full bg-[#72e9ae] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 "
          >
            <h2 className="text-2xl font-bold text-center py-8 text-white">
              {movie.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
