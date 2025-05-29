import { BACKGROUND_IMG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="w-full -z-10 h-full bg-black ">
      <div className="fixed h-full w-full">
        <img src={BACKGROUND_IMG_URL} alt="background" className="blur-sm w-full h-screen object-cover"/>
        
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
