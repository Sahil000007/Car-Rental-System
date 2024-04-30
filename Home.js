import Defaultlayout from "./Defaultlayout"
import DefaultLogout from "./DefaulyLogout"
import React from "react"
import Headvideo from "../Video/videoplayback.webm";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Cimg from "react-bootstrap/esm/CardImg";
import Row from "react-bootstrap/esm/Row";
import './Home.css'
import base from '../Images/Sedan3.jpg'
import lux from '../Images/lux.jpg'
import Sedan from '../Images/Sedan.jpg'
import Suv from '../Images/Suv3.jpg'
import ser1 from '../Images/ser1.jpg'
import ser2 from '../Images/ser2jpg.jpg'
import ser3 from '../Images/ser3.avif'
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';
import { FaGooglePlay, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Display } from "react-bootstrap-icons";




const Home = (props) => {
  console.log(typeof(props.val),"home");
  console.log(props.val,"home");
let aa=props.val
let bb=props.lval
console.log(aa);
console.log(bb);

if(aa=="1"){
  alert("a1")
  bb="none"
}
else{
  alert("el")
  aa="none"
}
if(bb=="non"){
  alert("b1")
  bb="none"
  aa="2"
  
}
// else{
//   bb="none"
// }
// if (aa=="1") {
//   aa="none"
// }

  // const [Login,Logout]=useState("1")
//   const [Lo,Logt]=useState("")
//   const [Logi,Logou]=useState("")
  
//   if(props.val[0]=="1"){
//     alert("1")
// Logout("none")
// // return 0;
// // document.getElementById("delogin").style.display = "none";
// // document.getElementsByTagName("div")[1].style.display = "none";
// }
// else{
//   alert("2")
//   Logou("none")
//   // return 0;
  
//   // document.getElementsByTagName("div")[2].style.display = "none";

//   // document.getElementById("delogout").style.display = "none";

// }
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };



  const data = [
    {
      name: 'Base Models Cars',
      img: base,
      review: 'A base model is the common ancestor for the versions of a model being compared or merged, and is used to track differences between model versions '

    },
    {
      name: 'Luxury Cars',
      img: lux,
      review: 'Luxury cars often use higher-quality interior materials and have features that aren t available on lower-priced models — engines,  safety features — and are packed with more amenities '

    },
    {
      name: 'Sedan Cars',
      img: Sedan,
      review: 'a 4-door passenger car with a trunk that is separate from the passengers with a three-box body: the engine, the area for passengers, and the trunk. '
    },
    {
      name: 'SUV Cars',
      img: Suv,
      review: ' a type of car that sits high off the ground and which often has four-wheel drive and rugged styling.  '
    }]
    
  // Email
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_jkt0mab",
        "template_vxlacgs",
        form.current,
        "fefh3VghhDVnf-6EX"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message has been Send")
          setDone(true);
          //  form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );

  }
  return (
    <>
      <div className="Header" >
      
       <div id="delogin"  style={{display:aa}}>

          <Defaultlayout />
       </div>
         <div id="delogout" style={{display:bb}}>

              <DefaultLogout/>
         </div>

    
        <Container fluid>
          <Row>
            <Col md='12'>
              <video src={Headvideo} autoPlay loop id="video" />
              <div class="container">
                <div className="typed-out"><h1>Just  Rent   It<br /></h1><h2>Drive The Car <br />&nbsp;&nbsp;&nbsp;&nbsp;You Want</h2></div>


                <h4>Rent a car just from your fingertip.<br /> We provide awesome cars at great <br /> prices.Rent a car, any time, anywhere.</h4></div>

            </Col>
          </Row>

          {/* CARS */}
          <div id="cars">
            <Row style={{ justifyContent: 'center' }}> <Col sm='11'>
              <div id="carscard">
                <div>
                  <Slider {...settings}>
                    {data.map((d) => (
                      <div id="ccards">
                        <div id="cimg">
                          {console.log(typeof(d.img),typeof(d.name))}
                          <img fluid src={d.img} alt="" id="ccimg" />

                        </div>
                        <Row>
                          <Col xs='11'>
                            <div id="ccontain">
                              <h3 id="h3">{d.name}</h3><br />
                              <span>{d.review}</span>
                              <Link to='/Booking' id="cbutton">Click </Link>
                            </div>
                          </Col>
                        </Row>

                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </Col></Row>



            {/* PROCESS */}

            <div id="process">
              <Row style={{ justifyContent: 'space-around' }}>
                <Col sm='3'>
                  <Card >
                    <Card.Img variant="top" src={ser1} />
                    <Card.Body>
                      <Card.Title>Get price online </Card.Title>
                      <Card.Text>
                        Answer some questions about your car to help us understand.
                      </Card.Text>
                    </Card.Body>
                  </Card>

                </Col>
                <Col sm='3'>
                  <Card>
                    <Card.Img variant="top" src={ser2} />
                    <Card.Body>
                      <Card.Title>Car inspection</Card.Title>
                      <Card.Text>
                        Our car expert physically verifies cars condition.
                      </Card.Text>
                    </Card.Body>
                  </Card>

                </Col>
                <Col sm='3'>
                  <Card>
                    <Card.Img variant="top" src={ser3} />
                    <Card.Body>
                      <Card.Title>Car pick up & payment</Card.Title>
                      <Card.Text>
                        transfer the amount directly to your bank account.
                      </Card.Text>
                    </Card.Body>
                  </Card>

                </Col>
              </Row>
            </div>
            {/* FORM */}
            <div id="form">
              <Row id="prow">
                <Col md='4' style={{ color: 'white' }}>
                  <h3 id="fh3">Contact Us</h3></Col>
                <Col md='4' style={{ color: 'white' }}>
                  <form action="" ref={form} onSubmit={sendEmail} id="form-form">

                    <input type="text" id="input" placeholder="Full Name" name="to_name" required />

                    <input type="text" id="input" placeholder="Email" name="from_name" required />

                    <textarea placeholder="Message" name="message" id="input" cols="10" rows="5"></textarea>
                    <div>
                    <button type="submit" value="Send" id="fbuttton">Send</button>
                    <button style={{marginLeft:'265px'}} type="reset" value="Send" id="fbuttton">reset</button>
                    </div>
                    
                  </form></Col>
              </Row>
            </div>
            {/* Review */}
            <div id="review">
              <Row style={{ justifyContent: 'space-around', padding: '8px' }}>
                <Col md='2' id='creview'>
                  <h3 id="rh3">4.5+</h3>
                  <h3 style={{ color: 'white' }}>Average Online Rating</h3>
                  <Card id="rcard">
                    <ListGroup variant="flush">
                      <ListGroup.Item> <FaGooglePlay /> &nbsp;
                        Google Playstore</ListGroup.Item>
                    </ListGroup>
                  </Card>
                  <Card id="rcard">
                    <ListGroup variant="flush">
                      <ListGroup.Item><BsApple /> &nbsp;
                        Apple Store</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
                <Col md='2' id="ccol">
                  <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Header>Ravi Patil</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md='2' id="ccol">
                  <Card border="primary" style={{ width: '18rem' }} >
                    <Card.Header>Abhishek</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md='2' id="ccol">
                  <Card border="primary" style={{ width: '15rem' }}>
                    <Card.Header>Akash</Card.Header>
                    <Card.Body>
                      <Card.Title>Primary Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </div>
            {/* FOOTER */}
            <div className="footer" style={{ backgroundColor: 'black' }}>
              <Row style={{ justifyContent: 'space-around' }}>
                <Col md='3' id="cfooter">
                  <h3 className="fcolor"><IoLocationOutline />&nbsp;
                    Find Us</h3>
                  <p>Maharashtra Pune 17</p>
                  <h3 className="fcolor" style={{ marginTop: '60px' }}>Car Rental</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae enim obcaecati totam quaerat aperiam molestias iure magni facere fugit modi, vel, placeat ut, perspiciatis illo?</p>

                </Col>
                <Col md='3' id="cfooter">
                  <h3 className="fcolor"><IoCallOutline />&nbsp;
                    Call Us</h3>
                  <h3>+91-9988776655</h3>
                  <h3 className="fcolor" style={{ marginTop: '57px' }}> UseFull Links</h3>
                  {/* <Nav.Link href="Booking">Book</Nav.Link> */}
                  <li id='li' className="fli">

                    <Link to='/Booking'>Booking</Link>
                  </li>
                  <li id='li' className="fli">

                    <Link to='/Login'>Login</Link>
                  </li>
                  {/* <Nav.Link href="Register">Register</Nav.Link> */}
                  <li id='li' className="fli">

                    <Link to='/Register'>Register</Link>
                  </li>
                  <li id='li' className="fli">

                    <Link to='/About'>About Us</Link>
                  </li>

                </Col>
                <Col md='3' id="cfooter">
                  <h3 className="fcolor"><CiMail />&nbsp;
                    Mail Us</h3>
                  <p>Rental@gmail.com</p>
                  <h3 className="fcolor" style={{ marginTop: '55px' }}>Follow Us </h3>
                  <div className="fonts">
                    <FaInstagram style={{ fontSize: '25px' }} />
                    <FaFacebookSquare style={{ fontSize: '25px' }} />
                    <FaXTwitter style={{ fontSize: '25px' }} />
                  </div>
                </Col>
              </Row>

            </div>
          </div>

        </Container>

      </div>

    </>
  )
}

export default Home
