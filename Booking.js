import React, { useEffect,useState } from 'react'
import Defaultlayout from './Defaultlayout'
import './Booking.css'
import { useSearchParams } from 'react-router-dom'
import { getAllcars } from '../actions/CarsAction'
import  base  from "../Images/base.jpg";
import  lux  from "../Images/lux.jpg";
import  Sedan  from "../Images/Sedan.jpg";
import  Suv  from "../Images/Suv.jpg";
import {faker} from '@faker-js/faker';
import Container from 'react-bootstrap/esm/Container'
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import './Booking.css'
import {  createContext, useContext} from "react";
import { Link } from "react-router-dom";
import Bookingcars from './Bookingcars';
import Logout from './Logout';



export const Con = createContext()
const Booking = (props) => {

  // const productsArray=[...Array(50)].map(()=>({
  //   // id:faker.datatype.uuid(),
  //   price:faker.commerce.price(),
  //   pro:faker.commerce.productName(),
  //   // name:faker.random.name()
  //   image:faker.image.food(1234, 2345, true),
    
  // }))

  // console.log(productsArray)
  const [users, setUsers] = useState([]);

  const getUsers = async ()=>{
    const response = await fetch('http://localhost:8080/',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
   console.log(data)
  }

  useEffect(()=>{
    getUsers();
  },[])
  
  
  return (
    // <Con.Provider value={{pp:"red"}}>
    <div style={{backgroundColor:'black'}}>
          <Defaultlayout/>
          <Container fluid>
          <h1 style={{marginBottom:'3rem'}}>Available cars are below</h1>
          {/* <h1>cars </h1> */}
          <Row>
            <Col>
          <div id='bookcars'>

          {users.map(user=><li  id='cardd' key={user._id}>
           <img fluid src={lux} id='bimg'/>

           <h3 id='bbname'>Model : {user.name} </h3>
            <h3 id='bbno'>Per Hour : {user.no} 
              <Link to='/Bookingcars' id='bbutt' 
              onClick={()=>{
                props.getdata(user)
              }}>Book</Link></h3>
</li>
          )}

        </div>
        </Col>
        </Row>
        </Container>
    </div>
    // </Con.Provider>
  )
}

export default Booking
