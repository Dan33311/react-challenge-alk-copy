// import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const List = () => {
  const navigate = useNavigate()
  
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if(token === null){
  //     navigate('/')
  //   }
  // }, [])
  
  const token = localStorage.getItem('token')

  return (
    <>
      { !token 
        ?
          <Navigate to="/" />
        :
          <div>
            <div>
              <div className="card mt-4" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button onClick={() => navigate('/details')} className="btn btn-primary">Details</button>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
      } 
    </> 
  );
}

export default List;