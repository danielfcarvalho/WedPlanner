import Navbar from './Navbar/index.js'
import Login from './Login/index.js'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="container col-4">
          <Login/>
        </div>
    </div>
  );
}

export default App;
