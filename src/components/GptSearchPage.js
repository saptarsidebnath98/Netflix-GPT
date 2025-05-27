import { BACKGROUND_IMG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="w-full -z-10 h-full bg-black">
      <div className="absolute h-full">
        <img src={BACKGROUND_IMG_URL} alt="background" className="blur-md "/>
        <img src={BACKGROUND_IMG_URL} alt="background" className="blur-md "/>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
