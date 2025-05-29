import { GrPlayFill } from "react-icons/gr";
import { MdInfoOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({title, overview, id}) => {
  const navigate = useNavigate();
  const handlePlayOrMoreInfo = (id) => {
      navigate(`/details/${id}`)
  };
  return (
    <div className="pt-[34%] md:pt-[15%] px-4 md:px-12 space-y-2 md:space-y-4 absolute text-white bg-gradient-to-r from-black h-[400px] md:h-[1000px]">
      <h1 className="text-sm md:text-4xl font-bold mt-10 md:mt-0">{title}</h1>
      <p className="w-1/2 text-[10px] md:text-sm hidden md:block">{overview}</p>
      <div className="flex space-x-1 md:space-x-3">
        <button onClick={() => handlePlayOrMoreInfo(id)} className="bg-white bg-opacity-90 text-[10px] md:text-sm py-1 px-2 md:py-2 md:px-6 flex items-center gap-1 md:gap-2 text-black rounded-md font-bold hover:opacity-70"><GrPlayFill className="text-[8px] md:text-lg"/><span>Play</span></button>
        <button onClick={() => handlePlayOrMoreInfo(id)} className="bg-gray-600 bg-opacity-90 text-[10px] md:text-sm py-1 px-2 md:py-2 md:px-4 flex items-center gap-1 md:gap-2 rounded-md font-bold text-white hover:opacity-70"><MdInfoOutline className="text-[7px] md:text-xl"/>More Info.</button>
      </div>
    </div>
  )
}

export default VideoTitle
