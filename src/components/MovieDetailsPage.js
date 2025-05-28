import { useNavigate, useParams } from "react-router-dom";
import { formatToUSCurrency, TMDB_IMG_CDN_URL } from "../utils/constants";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Loading from "./Loading";
import useMovieDetails from "../hooks/useMovieDetails";
import MovieContent from "./MovieContent";

const MovieDetailsPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {movieData , trailer, loading} = useMovieDetails(id);

  const handleBack = () => {
    navigate("/browse");
  }


  return (
    <div className="container mx-auto">
        <button onClick={handleBack}>
            <IoArrowBackCircleSharp size={25} />
          </button>
      {loading ? (
        <Loading/>
      ) : (
        <MovieContent trailer={trailer} movieData={movieData}/>
      )}
    </div>
  );
};

export default MovieDetailsPage;
