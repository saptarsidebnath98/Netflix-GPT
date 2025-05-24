import { useRef } from "react";
import MovieCard from "./MovieCard";
import useScrollLeft from "../hooks/useScrollLeft";

const MovieList = ({ title, movies }) => {

  const scrollRef = useRef(null);

  useScrollLeft(scrollRef);

  return (
    <div className="pt-3 pl-12 pr-2 bg-transparent">
      <h1 className="text-2xl font-semibold pb-3 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent [&::-webkit-scrollbar]:h-1"
        ref={scrollRef}
      >
        <div className="flex space-x-2">
          {movies?.map((movie) => (
            <MovieCard
              backdropPath={movie.poster_path}
              title={movie.title}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
