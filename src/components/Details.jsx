import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import Swal from "sweetalert2"

const Details = () => {

  const token = sessionStorage.getItem('token')

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const movieUrlID = urlParams.get('movieID')

  const [movieDetails, setMovieDetails] = useState(null)

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieUrlID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    axios
      .get(endPoint)
      .then(response => {
        setMovieDetails(response.data)
        console.log("movieDetails:", movieDetails);
      })
      .catch(error => {
        Swal.fire({
          title: `${error.message}!`,
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }, [movieUrlID])


  return (
    <>
      { !token && <Navigate to="/" /> }
      { !movieDetails && <p>Loading...</p> }
      { movieDetails
        &&
          <div className="container mt-5">
            <div className="row justify-content-center">
              {/* TODO: practice bootstrap grid with this structure */}
              <div className="col-4">
                <img src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`} alt="poster_path" />
                {/* <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt="poster_path" /> */}
                
                {/* belongs_to_collection is an object and in some movies its value is null */}
                {/* <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.belongs_to_collection?.backdrop_path}`} alt="poster_path" /> */}
                {/* <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.belongs_to_collection?.poster_path}`} alt="poster_path" /> */}
              </div>
              <div className="col-8 col-md-6">
                <h2>{movieDetails.title}</h2>
                <p>{movieDetails.overview}</p>
                <h5>Genres: </h5>
                <ul>
                  {movieDetails.genres.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                    ))}
                </ul>
                <h5>Average: </h5>
                <p>{movieDetails.vote_average}/10</p>
                {/* <h5>Language: </h5>
                <ul>
                  {movieDetails.spoken_languages.map(language => (
                    <li>{language.english_name}</li>
                  ))}
                </ul> */}

                <h5>Release Date: </h5>
                <p>{movieDetails.release_date}</p>
                <h5>Runtimee: </h5>
                <p>{movieDetails.runtime} minutes</p> 
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Details


// API GET MOVIE
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US