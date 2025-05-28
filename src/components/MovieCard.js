import { Link } from "react-router-dom"
import { TMDB_IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath, title, id}) => {
  if(!posterPath) return;

  return (
    <div className="relative w-28 ">
      <Link to={`/details/${id}`}>
      {<img src={TMDB_IMG_CDN_URL + posterPath} alt="Movie Card" className="rounded-sm  shadow-lg shadow-black w-full h-40 object-fill"/>}
      </Link>
    </div>
  )
}

export default MovieCard
