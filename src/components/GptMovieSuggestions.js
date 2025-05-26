import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  // console.log(movieResults[0])

  if (!movieNames || !movieResults ) return <p>No suggestion for now! try gain later.</p>;

  return (
    <div className="w-full absolute top-[30%] bg-transparent">
      <div className="w-11/12 bg-black rounded-md text-white mx-auto bg-opacity-55 pr-6 pb-5 mb-10">
        {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>)}
        
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
