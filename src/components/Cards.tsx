import React from "react";
import { useApi } from "../context/ApiContext";
import { AiTwotoneStar } from "react-icons/ai";

const Cards = () => {
  const { searchData }: any = useApi();

  const imguri = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="w-full py-[4rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        {searchData.map((movie: any) => (
          <div
            key={movie.id}
            className="w-full shadow-xl flex flex-col p-4 my-12 rounded-lg hover:scale-105 duration-300 "
          >
            <img
              className="w-40 h-40 mx-auto mt-[-3rem] bg-white"
              src={imguri + movie.poster_path}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {movie.title}
            </h2>
            <div className="flex gap-2 items-center justify-center mb-12">
              <AiTwotoneStar size={20} color="#72e9ae" />
              <p className="text-center text-2xl font-bold hover:text-blue-400">
                {movie.popularity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
