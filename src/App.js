import './App.css';
import { Routes, Route } from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notestate from './components/context/notes/Notestate';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
function App() {
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  return (
    <>
    <Notestate>
    <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home showalert={showalert}/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/login" element={<Login showalert={showalert}/>}></Route>
        <Route exact path="/signup" element={<Signup showalert={showalert}/>}></Route>
      </Routes> 
      </div>
    </Router>
    </Notestate>
    </>
  );
}

export default App;
