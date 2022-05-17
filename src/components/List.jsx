import axios from "axios";
import Swal from 'sweetalert2'

import { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";


const List = () => {
  const navigate = useNavigate()
  const API_KEY = process.env.REACT_APP_API_KEY

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US`

    axios
      .get(endPoint)
      .then((response) => {
        const moviesData = response.data.results
        setMoviesList(moviesData);
      })
      .catch(error => {
        Swal.fire({
          title: `${error.message}!`,
          text: 'Please try again later',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }, [])
  
  const token = sessionStorage.getItem('token')


  return (
    <>
      { !token 
        ?
          <Navigate to="/" />
        :
          <div className="row">
            { moviesList.map((movie, index) => (            
              <div className="col-sm-6 col-md-4 col-lg-3 py-4" key={index}>
                <div className="card">
                  <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title.substring(0, 36)}</h5>
                    <p className="card-text">{movie.overview.substring(0, 80)}</p>
                    {/* <button onClick={() => navigate('/details')} className="btn btn-primary">Details</button> */}
                    <Link to={`/details?movieID=${movie.id}`} className="btn btn-primary">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
      } 
    </> 
  );
}

export default List;


// THE MOVIE DB - DOCUMENTATION
// https://developers.themoviedb.org/3/discover/movie-discover

// DOCUMENTATION - API URL FOR GET MOVIES
// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

// MY REFACTOR URL
// https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US
