import { TMDB_IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({backdropPath, title}) => {
  return (
    <div className="relative w-28 ">
      <img src={TMDB_IMG_CDN_URL + backdropPath} alt="Movie Card" className="rounded-sm  shadow-lg shadow-black "/>
      {/* <h3 className="absolute z-10">{title}</h3> */}
    </div>
  )
}

export default MovieCard
