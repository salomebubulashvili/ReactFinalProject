import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContextProvider";
import useFetch from "../../hooks/useFetch";
import MoviesCard from "../../components/MoviesCard";

const Movies = () => {
  const { state } = useAppContext();
  const [movies, setMovies] = useFetch(
    "https://imdb-top-100-movies.p.rapidapi.com/",
  );

  useEffect(() => {
    const fetchMovies = async () => {
      console.log(movies);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "9470022ce9mshd575d39f35209ccp11fe43jsnfe7776b25b5d",
          "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(
          "https://imdb-top-100-movies.p.rapidapi.com/",
          options,
        );
        const result = await response.json();
        setMovies(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [setMovies]);

  console.log(state);

  return (
    <div>
      <h1>Movies page</h1>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} data={movie} />
      ))}
    </div>
  );
};

export default Movies;