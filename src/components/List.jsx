import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const List = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token === null){
      navigate('/')
    }
  }, [])
  

  return (
    <h1>This is the List route</h1>
  );
}

export default List;