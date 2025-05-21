import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
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
