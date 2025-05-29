import { FaImdb } from "react-icons/fa";
import { formatToUSCurrency, TMDB_IMG_CDN_URL } from "../utils/constants";
import Loading from "./Loading";

const MovieContent = ({
  trailer,
  movieData,
  trailerLoading,
  movieDataLoading,
}) => {

  const headingStyle = "font-bold text-[#e50914] text-sm md:text-lg";
  return (
    <div className="min-h-screen">
      {trailerLoading ? (
        <div className="w-full md:w-6/12 h-70 bg-black mx-auto aspect-video rounded-md ">
          <Loading />
        </div>
      ) : (
        trailer?.key && (
          <iframe
            className="w-full md:w-6/12 mx-auto aspect-video rounded-md cursor-not-allowed pointer-events-none"
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&loop=1&playlist=${trailer?.key}&rel=0&controls=0&showinfo=0&modestbranding=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        )
      )}

      {movieDataLoading ? (
        <div className="p-4 mt-4 h-96 rounded-md bg-black border-2 border-dashed border-gray-500 text-white bg-opacity-80 space-y-2">
          <Loading />
        </div>
      ) : (
        <div className="p-2 md:p-4 mt-4 rounded-md bg-black border-2 border-dashed border-gray-500 text-white bg-opacity-80 space-y-2 text-sm md:text-lg">
          <h1 className=" font-bold text-center text-gray-200 bg-gradient-to-r from-black via-[#e50914] to-black bg-opacity-80 pb-1 rounded-sm mb-2 cursor-not-allowed text-sm md:text-lg">
            Movie Information
          </h1>
          <p>
            <span className={headingStyle}>Watch Now : </span>
            {movieData?.homepage ? (
              <a
                href={movieData?.homepage}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 border-b border-blue-700 hover:text-blue-800"
              >
                movie link
              </a>
            ) : (
              "Not Available"
            )}
          </p>
          <h1>
            <span className={headingStyle}>Title :</span>{" "}
            {movieData?.original_title}{" "}
          </h1>
          <p>
            <span className={headingStyle}>Overview :</span>{" "}
            {movieData?.overview || "Not Available"}
          </p>
          <p>
            <span className={headingStyle}>Tagline :</span>{" "}
            {movieData?.tagline || "Not Available"}
          </p>
          {movieData?.adult && <p>Content type: 18+ content</p>}
          <p>
            <span className={headingStyle}>Genres :</span>{" "}
            {movieData?.genres?.map((genre) => genre.name).join(", ") ||
              "Not Available"}
          </p>
          <p>
            <span className={headingStyle}>Release Status :</span>{" "}
            {movieData?.status || "Not Available"}
          </p>
          <p>
            <span className={headingStyle}>Release Date :</span>{" "}
            {movieData?.release_date || "Not Available"}
          </p>
          <p>
            <span className={headingStyle}>Runtime :</span>{" "}
            {movieData?.runtime || "Not Available"}m
          </p>
          <div className="flex items-start flex-col md:flex-row gap-2">
            <p>
              <span className={headingStyle}>Production Companies :</span>
            </p>
            <div className="flex justify-start gap-1 md:gap-3 items-center flex-wrap">
              {movieData?.production_companies?.map((company) => (
                <div key={company.id}>
                  {company.logo_path ? (
                    <img
                      src={TMDB_IMG_CDN_URL + company.logo_path}
                      alt={company.name}
                      className="h-6 w-auto bg-white p-0.5"
                    />
                  ) : (
                    <p>{company.name}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p>
            <span className={headingStyle}>Rating : </span>
            {movieData?.vote_average && movieData?.vote_count ? (
              <span>
                {movieData?.vote_average?.toFixed(1)} / 10 (
                {movieData?.vote_count?.toLocaleString()} votes)
              </span>
            ) : (
              "Not Available"
            )}
          </p>
          <p>
            <span className={headingStyle}>Popularity :</span>{" "}
            {movieData?.popularity?.toFixed(2) || "Not Available"}
          </p>
          <p>
            <span className={headingStyle}>Budget :</span>{" "}
            {movieData?.budget
              ? formatToUSCurrency(movieData?.budget)
              : "Not Available"}
          </p>
          <p>
            <span className={headingStyle}>Revenue :</span>{" "}
            {movieData?.revenue
              ? formatToUSCurrency(movieData?.revenue)
              : "Not Available"}
          </p>
          {movieData?.imdb_id && <p className="flex">
            
              <FaImdb className="text-yellow-500 h-5 w-5 md:h-8 md:w-8 mr-2"/>
            <a
              href={`https://www.imdb.com/title/${movieData?.imdb_id}/`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 border-b text-xs md:text-lg border-blue-700 hover:text-blue-800"
            >
              {" "}
              View in IMDB Official Page
            </a>
          </p>}
          
        </div>
      )}
    </div>
  );
};

export default MovieContent;
