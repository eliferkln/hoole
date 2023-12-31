import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext({});

export function useApi() {
  return useContext(ApiContext);
}

export function ApiProvider({ children }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [genres, setGenres] = useState([]);
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const endpoint = "/movie/popular";
  const genresEndpoint = "/genre/movie/list";
  useEffect(() => {
    axios
      .get(`${baseUrl}${genresEndpoint}`, { params: { api_key: apiKey } })
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error("Error fetching movie genres:", error);
      });
    axios
      .get(`${baseUrl}${endpoint}`, { params: { api_key: apiKey } })
      .then((response) => {
        setPopularMovies(response.data.results);
        setSearchData(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, [apiKey]);

  return (
    <ApiContext.Provider
      value={{ popularMovies, searchData, setSearchData, genres }}
    >
      {children}
    </ApiContext.Provider>
  );
}
