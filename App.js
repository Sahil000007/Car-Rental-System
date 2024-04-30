import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Home from './pages/Home';
import Login from './pages/Login';
import Booking from './pages/Booking';
import Register from './pages/Register';
import Bookingcars from './pages/Bookingcars';
import Defaultlayout from './pages/Defaultlayout';
// import Register from './pages/Register';
import { Route,BrowserRouter,Routes } from "react-router-dom";
import About from './pages/About';
import {  createContext, useContext} from "react";
import Logout from './pages/Logout';

export const Con = createContext()





const App = () => {
  const [dataa,setdataa]=useState([1])
const [dat,setdat]=useState([2])
const [da,setda]=useState([3])
const [d,setd]=useState(["email"])
const [log,setloga]=useState(["logout"])
const [lo,setlog]=useState(["logout"])
const [loho,sethome]=useState("1")
const [loh,sethom]=useState("lll")

function getemail(mail) {
  console.log(mail,"email");
  console.log(mail[0].email,"email.email");
  setd(mail[0].email)
  setloga(mail[0].name)
  setlog(mail[0].number)
  sethome("no")

}

function getlog(dat) {
  console.log(dat);
  sethom("non")
}
  function getdata(nn) {
    console.log(nn);
    setdataa(nn._id)
    setdat(nn.name)
    setda(nn.no)
    // setdataa(nn.id)
  }
  return (
    <div>
   <BrowserRouter>
   <Routes>

<Route path='' element={<Home lval={loh}  val={loho}/>}/>
<Route path='/Defaultlayout' element={<Defaultlayout/>}/>
<Route path='/Login' element={<Login getemail={getemail}/>}/>
<Route path='/Booking' element={<Booking getdata={getdata}  />}/>
<Route path='/Register' element={<Register />}/>
<Route path='/About' element={<About/>}/>
<Route path='/Logout' element={<Logout value={log} val={lo} va={d}  getlog={getlog}/>} />
<Route path='/Bookingcars' element={<Bookingcars  value={dataa}valu={dat} val={da} va={d}/>}/>
</Routes>
</BrowserRouter>
    </div>

  )
}

export default App
