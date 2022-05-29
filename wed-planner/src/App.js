import MyNavbar from './Navbar/index.js'
import Login from './Login/index.js'
import Home from './Home/index.js';
import GuestList from './GuestList/index.js';
import Services from './Services/index.js';
import Budget from './Budget/index.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("")

  const getUser = (user) => {
    setUser(user)
  }

  return (
    <div className="App back">
      <Router> 
        <MyNavbar user={user}/>
        <Routes>
          <Route path="/Login" element={<Login user={getUser}/>}/>
          <Route path="/Home" element={<Home username={user}/>}/>
          <Route path="/GuestList" element={<GuestList user={user}/>}/>
          <Route path="/Services" element={<Services user={user}/>}/>
          <Route path="/Budget" element={<Budget user={user}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;