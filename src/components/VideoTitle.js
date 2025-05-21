import { GrPlayFill } from "react-icons/gr";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-12 space-y-4 absolute text-white bg-gradient-to-r from-black aspect-video">
      <h1 className="text-4xl font-bold ">{title}</h1>
      <p className="w-1/2">{overview}</p>
      <div className="flex space-x-3">
        <button className="bg-white bg-opacity-90 py-2 px-6 flex items-center gap-2 text-black rounded-md font-bold hover:opacity-70"><GrPlayFill size={24}/><span>Play</span></button>
        <button className="bg-gray-600 bg-opacity-90 py-2 px-4 flex items-center gap-2 rounded-md font-bold text-white hover:opacity-70"><MdInfoOutline size={30}/>More Info.</button>
      </div>
    </div>
  )
}

export default VideoTitle
