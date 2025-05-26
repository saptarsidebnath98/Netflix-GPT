import { TMDB_IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({backdropPath, title}) => {
  if(!backdropPath) return
  return (
    <div className="relative w-28 ">
      {<img src={TMDB_IMG_CDN_URL + backdropPath} alt="Movie Card" className="rounded-sm  shadow-lg shadow-black w-full h-44 object-fill"/>}
    </div>
  )
}

export default MovieCard
