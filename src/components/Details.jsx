import { Navigate } from "react-router-dom"

const Details = () => {

  const token = sessionStorage.getItem('token')


  return (
    <>
      { !token
        ?
          <Navigate  to="/"/>
        :
          <h1>Movie Details</h1>
      }
    </>
  )
}

export default Details