import MainButton from '../Components/Button.js'
import Carousel from '../Components/Carousel.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Login({user}) {

  const [username, setUsername] = useState("Monica")
  const navigate = useNavigate();

  const getUser = () =>{
    user(username)
    navigate("/Home")
  }

    return (
        <div>
            <div className='row'>
              <div className='col-6'>
                <Carousel/>
              </div>
              <div className='col-6 align-self-center'>
                <h1 style={{textAlign: 'center'}} className="mb-4"> LOGIN </h1>
                <div className="row mb-4 justify-content-center">
                <div className="col-6">
                  <select className="form-select" aria-label="Default select example" onChange={(e) => setUsername(e.target.value)}>
                    <option value="Monica">Monica (Admin Account)</option>
                    <option value="Rachel">Rachel (Helper Account)</option>
                  </select>
                </div>
                </div>
                <div className="row mb-4 justify-content-center">
                  <div className="col-6">
                    <input type="password" className="form-control" id="inputPassword" placeholder='password' readOnly/>
                  </div>
                </div>
                <div className="row justify-content-center">
                    <MainButton text="Login" callFunction={getUser}/>
                </div>
              </div>
              </div>
        </div>
    );
}

export default Login;
