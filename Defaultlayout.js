import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import './Default.css'
import React, { useState } from 'react'

// import { useState } from "react";



function Defaultlayout(props) {
  console.log(props.ele,"layout");
    // const [igap, lgap] = useState(true);
    // const [initgap, llgap] = useState(35+"px");

//     function gap() {
//         if(igap==true){

//             lgap(false)
//         }else if(igap==false){
// // llgap(3+"px")
// lgap(true)
//         }
//         console.log("p");
//     // `${style={{color}}}`

//     }
// const [data,setdata]=useState('Logout')
// const [tru,fals]=useState(false)


// function togg(nm) {
//   let a= false
//   if (a) {

//     alert("laiak")
//     setdata('Logout')
//   }
  
// }
  return (
    <Navbar expand="lg">
      <Container fluid>
      <Link to='/' style={{marginRight:'140px',fontSize: '2rem',
  fontStyle: 'oblique',zIndex:'1'}}>Rental</Link>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:'red'}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0" id='nav'
            style={{ maxHeight: '100px' ,gap:'35px'}}
            navbarScroll
          >
            {/* <Nav.Link href="Booking">Book</Nav.Link> */}
            <li id='li'>
                
            <Link to='/Booking'>Booking</Link>
            </li>

            {/* <Nav.Link href="Login">Login</Nav.Link>
             */}
             <p >
             <li id='li'>

               <Link to='/Login'>Login</Link>
             </li>

             </p>
            {/* <Nav.Link href="Register">Register</Nav.Link> */}
            {/* <li id='li'>

            <Link to='/Register'>Register</Link>
            </li> */}
            <li id='li'>

            <Link to='/About'>About Us</Link>
            </li>

            {/* <Nav.Link href="Home">Home</Nav.Link> */}
         

          </Nav>
          {/* <Form className="d-flex" style={{gap:'9px'}}>
           <input placeholder='Search...' id='input'/>
            <Button variant="outline-success" style={{backgroundColor:'red',color:'white',borderRadius:'40px'}}>Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
      {/* <div className="content">
        {props.children}
      </div> */}
    </Navbar>
  );
}

export default Defaultlayout;