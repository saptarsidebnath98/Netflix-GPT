import { LuSearchCode } from "react-icons/lu";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import client from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const languageKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);


  //serach movie in TMDB API
  const searchMovieTMDB = async(movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);

    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {

    const gptQuery = "Act as a movie recommendation system and suggest some movie names for the query: " + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example given ahead. Example Result: Gadar, Don, Inception, Spiderman, The Lunchbox";

    // make an API call to GPT apis and get results
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "openai/gpt-4o",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
    });

    if(!gptResults.choices){
        //Error handling
        return (<p>Fail to fetch results</p>)
    }

    //response example: The Shawshank Redemption, The Godfather, The Dark Knight, Schindler's List, Pulp Fiction
    const gptMovies = gptResults.choices[0]?.message?.content.split(", ");

    // For each movie I have to search TMDB search API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
  };


  return (
    <div className="w-full absolute top-[12%] md:top-[15%] bg-transparent">
      <form
        className="pt-10 md:pb-10 px-3 md:px-12 w-full text-[12px] md:text-sm  md:w-1/2 mx-auto flex justify-center items-center space-x-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className=" py-1 px-3 w-full md:w-2/3 rounded-md text-white border-2 border-[#e50914] focus:outline-none placeholder:text-gray-500 bg-black"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          className="bg-[#e50914] hover:bg-[#f7444d] text-white rounded-md text-[10px] md:text-sm font-semibold pt-1 pb-1.5 flex items-center gap-1 p-2 md:pr-3 md:pl-2"
          onClick={handleGptSearchClick}
        >
          <LuSearchCode className="text-xs md:text-sm" />
          <span className="hidden md:block">{lang[languageKey].search}</span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
