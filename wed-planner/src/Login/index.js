

function Login() {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}> LOGIN </h1>
            <div className="row mb-4 justify-content-center">
            <div className="col-8">
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>username</option>
                <option value="1">Monica(Admin Account)</option>
                <option value="2">Rachel(Helper Account)</option>
              </select>
            </div>
            </div>
            <div className="row mb-4 justify-content-center">
              <div className="col-8">
                <input type="password" className="form-control" id="inputPassword"/>
              </div>
            </div>
            <div className="row justify-content-center">
                <button type="submit" className="btn btn-secondary mb-3 col-4">Login</button>
            </div>
        </div>
    );
}

export default Login;
