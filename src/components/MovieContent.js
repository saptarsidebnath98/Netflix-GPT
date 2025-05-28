import React from 'react'
import { formatToUSCurrency, TMDB_IMG_CDN_URL } from '../utils/constants'

const MovieContent = ({trailer, movieData}) => {
  return (
    <div className="py-10">
          
          {trailer?.key && <iframe
            className="w-2/3 mx-auto aspect-video"
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&loop=1&playlist=${trailer?.key}&rel=0&controls=0&showinfo=0&modestbranding=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>}
          
          <div>
            <h1>Title : {movieData?.original_title} </h1>
            <p>Overview : {movieData?.overview}</p>
            <p>Tagline : {movieData?.tagline}</p>
            {movieData?.adult && <p>Content type: 18+ content</p>}
            <p>
              Genres :{" "}
              {movieData?.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <p>Release Status : {movieData?.status}</p>
            <p>Release Date : {movieData?.release_date}</p>
            <p>Runtime : {movieData?.runtime}m</p>
            <div className="flex items-start space-x-4">
              <p>Production Companies:</p>
              <div className="flex items-center space-x-4">
                {movieData?.production_companies?.map((company) => (
                  <div key={company.id}>
                    {company.logo_path ? (
                      <img
                        src={TMDB_IMG_CDN_URL + company.logo_path}
                        alt={company.name}
                        className="h-5 w-auto"
                      />
                    ) : (
                      <p>{company.name}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
             <p>Rating : {movieData?.vote_average?.toFixed(1)} / 10 ({(movieData?.vote_count)?.toLocaleString()} votes)</p>
             <p>Popularity : {movieData?.popularity?.toFixed(2)}</p>
             <p>Budget : {movieData?.budget && formatToUSCurrency(movieData?.budget)}</p>
             <p>Revenue : {movieData?.revenue && formatToUSCurrency(movieData?.revenue)}</p>
            <p>
              Watch Now :{" "}
              <a
                href={movieData?.homepage}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 border-b border-blue-700 hover:text-blue-800"
              >
                movie link
              </a>
            </p>
          </div>
        </div>
  )
}

export default MovieContent
