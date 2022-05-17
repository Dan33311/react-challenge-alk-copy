import Swal from 'sweetalert2'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    // no empty fiels
    if(email === "" || password === ""){
      // MySwal.fire(<p>there is empty fields</p>)
      Swal.fire({
        title: 'There is empty fields!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return
    }

    // REGEX
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(email !== "" && !regexEmail.test(email)){
      Swal.fire({
        title: 'Invalid email format!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return
    }

    // verify correct credentials email and password
    if(email !== 'challenge@alkemy.org' || password !== 'react'){
      Swal.fire({
        title: 'Invalid credentials!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      return
    }

    Toast.fire({
      icon: 'success',
      title: 'Login successfully'
    })

    axios.post('http://challenge-react.alkemy.org', {
      email,
      password
    })
    .then(function (response) {
      const token = response.data.token
      sessionStorage.setItem('token', token)
      navigate('/list') 
      console.log(token);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const token = sessionStorage.getItem('token')


  return (
    <>
      { token 
        ? 
          <Navigate to="/list" /> 
        :
          <div className="container">
            <div className="row d-flex flex-column justify-content-center align-items-center mt-5">
              <form onSubmit={handleSubmit} className="col-8 col-sm-6 col-md-6 col-lg-4">
                <label className='mb-2 w-100'>
                  <span>Email:</span><br />
                  <input type="text" name="email" className='form-control'/>
                </label>
                <br />

                <label className='mb-2 w-100'>
                  <span>Password:</span><br />
                  <input type="password" name="password" className='form-control'/>
                </label>
                <br />

                <button className='btn btn-primary mt-2 w-100'>Enviar</button>
              </form>
            </div>
          </div>
      }
    </>
  );
}

export default Login;