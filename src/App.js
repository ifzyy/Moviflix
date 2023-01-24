import React, { useState} from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Home from './components/Home.js';
import axios from 'axios';

import './App.css';

function App() {

  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setuser] = useState({})

  const handleLogout = () =>{
    axios.delete("http://localhost:3001/logout", {withCredentials: true})
    .then(response =>{
      if(response.data.loggedout){
        setLoggedInStatus(false)
      }
    })
  }

  const checkLoggedIn =()=>{
    axios.get("http://localhost:3001/logged_in", {withCredentials: true})
    .then(response =>{
      console.log(response.data)
      if(response.data.logged_in  && loggedInStatus === false) {
        setLoggedInStatus(true)
        setuser(response.data.user)
      }
      else if(!response.data.logged_in && loggedInStatus){
        setLoggedInStatus(false)
         setuser({})
      }
    })
  }
  
   useEffect(() => {
    checkLoggedIn()
   }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home loggedInStatus={loggedInStatus} user={user} logout={handleLogout}/>} />
          <Route path="/login" element={<Login setLoggedInStatus={setLoggedInStatus} setuser={setuser}/>} />
          <Route path="/signup" element={<Signup loggedInStatus={loggedInStatus} setLoggedInStatus={setLoggedInStatus} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// export default class App extends Component {
//   constructor(){
//     super()

//     this.state = {
//       loggedInStatus: "NOT LOGGED IN",
//       user:{}
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element = {<Home loggedInStatus = {this.state.loggedInStatus} />}/>
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }
