import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex gap-6 w-full">
      <input
        className="bg-gray-50 border border-[#6f89b45e] rounded-md text-sm w-full indent-2 p-4 outline-none focus:border-[#3567b980] focus:ring-1 rounded-tl rounded-bl"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="bg-[#6f89b45e] px-6 py-3 text-white rounded-tr rounded-md  disabled:bg-gray-400">
        Search
      </button>
    </div>
  );
};

export default Search;
