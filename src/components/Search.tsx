import React, { useState } from "react";
import { useApi } from "../context/ApiContext";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { popularMovies, setSearchData }: any = useApi();

  const handleSearch = () => {
    const results = popularMovies.filter((item: any) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchData(results);
  };

  return (
    <div className="flex gap-6 w-full">
      <input
        className="bg-gray-50 border border-[#6f89b45e] rounded-md text-sm w-full indent-2 p-4 outline-none text-black rounded-bl"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-[black] px-6 py-3 text-white rounded-tr rounded-md  disabled:bg-gray-400"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
