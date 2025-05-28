import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieDetails = (id) => {
    const [movieData, setMovieData] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);

  const getMovieVideos = async () => {
    
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const fetchedTrailer = filterData.length ? filterData[0] : json.results[0];
    setTrailer(fetchedTrailer);
    setLoading(false);
  };

  const getMovieData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieData(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovieVideos();
    getMovieData();
  }, []);

  return {movieData , trailer, loading}
};

export default useMovieDetails;
