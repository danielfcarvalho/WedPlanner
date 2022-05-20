import Button from '../Components/Button.js'
import Carousel from '../Components/Carousel.js'

function Login() {
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
                  <select className="form-select" aria-label="Default select example">
                    <option defaultValue>username</option>
                    <option value="1">Monica (Admin Account)</option>
                    <option value="2">Rachel (Helper Account)</option>
                  </select>
                </div>
                </div>
                <div className="row mb-4 justify-content-center">
                  <div className="col-6">
                    <input type="password" className="form-control" id="inputPassword"/>
                  </div>
                </div>
                <div className="row justify-content-center">
                    <Button text="Login" />
                </div>
              </div>
              </div>
        </div>
    );
}

export default Login;
