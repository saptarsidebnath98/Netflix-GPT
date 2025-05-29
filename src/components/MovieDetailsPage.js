import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import useMovieDetails from "../hooks/useMovieDetails";
import MovieContent from "./MovieContent";
import { BiSolidCameraMovie } from "react-icons/bi";

const MovieDetailsPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {movieData , trailer, trailerLoading, movieDataLoading} = useMovieDetails(id);

  const handleBack = () => {
    navigate("/browse");
  };

  console.log(movieData)


  return (
    <div className="container mx-auto bg-gradient-to-t from-black to-[#e50914] p-4 md:p-8 ">
      <div className="flex items-center justify-between pb-2 gap-2">
          <button onClick={handleBack} >
            <IoArrowBackCircleSharp size={20} className="h-7 w-7 md:h-10 md:w-10 hover:text-gray-200 text-white"/>
          </button>
          <h1 className='text-xs md:text-2xl font-bold text-right text-white flex items-center gap-1'>{movieData?.original_title}<BiSolidCameraMovie className="text-black h-8 w-8"/></h1>
      </div>
        
          
      
        <MovieContent trailer={trailer} movieData={movieData} trailerLoading={trailerLoading} movieDataLoading={movieDataLoading}/>
      
    </div>
  );
};

export default MovieDetailsPage;
