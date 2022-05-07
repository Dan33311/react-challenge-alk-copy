import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Login = () => {

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
    if(email !== 'challenge@alkemy.org' && password !== 'react'){
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

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span><br />
          <input type="text" name="email"/>
        </label>
        <br />

        <label>
          <span>Password:</span><br />
          <input type="password" name="password"/>
        </label>
        <br />

        <button>Enviar</button>
      </form>
    </>
  );
}

export default Login;