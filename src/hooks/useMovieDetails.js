import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (id) => {
    const [movieData, setMovieData] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [trailerLoading, setTrailerLoading] = useState(true);
    const [movieDataLoading, setMovieDataLoading] = useState(true);

  const getMovieVideos = async () => {
    
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const fetchedTrailer = filterData.length ? filterData[0] : json.results[0];
    setTrailer(fetchedTrailer);
    setTrailerLoading(false);
  };

  const getMovieData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieData(json);
    setMovieDataLoading(false);
  };

  useEffect(() => {
    getMovieVideos();
    getMovieData();
  }, []);

  return {movieData , trailer, trailerLoading, movieDataLoading}
};

export default useMovieDetails;
