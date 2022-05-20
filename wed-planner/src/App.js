import Navbar from './Navbar/index.js'
import Login from './Login/index.js'
import HomeAdmin from './HomeAdmin/index.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar/>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/HomeAdmin" element={<HomeAdmin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;