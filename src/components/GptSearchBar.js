import { LuSearchCode } from "react-icons/lu";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="w-full absolute top-[15%] bg-transparent">
      <form className="pt-10 pb-10 px-12  w-1/2 mx-auto flex justify-center items-center space-x-2">
        <input
          type="text"
          className=" py-1 px-3 w-2/3 rounded-md text-white border-2 border-[#e50914] focus:outline-none placeholder:text-gray-500 bg-black"
          placeholder={lang.bengali.gptSearchPlaceholder}
        />
        <button className="bg-[#e50914] hover:bg-[#f7444d] text-white rounded-md text-sm font-semibold p-2 flex items-center gap-1">
          <LuSearchCode size={20}/>{lang.bengali.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
