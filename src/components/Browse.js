import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black pb-10">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        Main Container
          - VideoBackground
          - Video Title
        Secondary Container
          - MoviesList * n
            - cards * n

      */}
    </div>
  );
};

export default Browse;
