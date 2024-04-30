import React ,{ useContext,useState}  from 'react'
// import {Con} from "./Booking";  
import moduleName from '../pages/Bookingcars.css'
import Container from 'react-bootstrap/esm/Container'
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import base from '../Images/backhd.jpeg'
import {loadStripe} from '@stripe/stripe-js';




const Bookingcars = (props) => {
    // const {pp,oo}=useContext(Con)
console.log(props.va,"emailva");
    const [form, setForm] = useState({});
    const [hour, sethour] = useState(0);
    const [time, settime] = useState(0);
    const [ti, setti] = useState([]);

    const handleForm = (e)=>{
      var start = new Date(form.Fromdate);
      console.log(start);
      var end = new Date(form.Todate);
      console.log(end);
 
      var difference = Math.abs(end - start);
      var hours = Math.ceil(difference / (1000 * 60 * 60)); // Convert milliseconds to hours
    console.log(hours);
    
    let Total=hours*props.val
    sethour(hours)
  settime(Total)
    // console.log(Total);
    setti([{moduleName:props.valu,Perhour:props.val,Total:hours,PriceId:props.value}])
     setForm({
       ...form,
       [e.target.name] : e.target.value
     })
     console.log(form);
     console.log(form.Fromdate);
 
   
   }
  
    const handleSubmit = async (e)=>{
     e.preventDefault();
     console.log(form);
    console.log(form.Fromdate);
    const makePayment = async()=>{
      //alert("pay1")
      const stripe = await loadStripe("pk_test_51P1l8QSF158xzIU46PuYqGzBS2sYWIW1i62qE76wjcO3uRcAS41h1GCudLMXqil665Hdi0D3RZtzyTCH4xycMimw00fP0IyDDF");
      
      const body = {
        products:ti
      }
      // alert("pay")
      const headers = {
        "Content-Type":"application/json"
      }
      const response = await fetch("http://localhost:8080/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
      });
      
      const session = await response.json();
      
      const result = stripe.redirectToCheckout({
        sessionId:session.id
      });
      
      if(result.error){
        console.log(result.error);
      }
    }
    makePayment()


   // alert("Rented Successfully")
     const response = await fetch('http://localhost:8080/6',{
       method:'POST',
       body:JSON.stringify(form),
       headers:{
         'Content-Type':'application/json'
       }
  
     })
    //  alert("22")
     const data = await response.json();
     

   }

  
  
  return (
      <>
      <div className="main">
                <Container  fluid>
                  <Row style={{justifyContent:"space-evenly"}}>
                    <Col md='4'>
                    <img src={base} alt=""  id='bookimg'/>

                    </Col>
                    <Col md='6'>
  <h3 style={{marginTop:"3rem"}}>-----------Car Info-------------</h3>
 <h5 id='coloBook'>Model Number : {props.value}</h5>
 <h5 id='coloBook' >Model Name : {props.valu}</h5>
 <h5 id='coloBook' name='Modelprice'>Price Per Hour : {props.val}</h5>
{/* //  <h3 id='coloBook'>Cars Descrption</h3> */}
 {/* <h5 id='coloBook' style={{marginTop:"-28px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, animi eaque maxime explicabo facere iusto. Perspiciatis nostrum natus, odio nesciunt ad doloremque hic sit fuga, quisquam ratione reiciendis esse enim?</h5> */}
 <h3>---------Select Time Slot----------</h3>
 <form action="" onSubmit={handleSubmit}>
  <div id='hidd'>
  {/* <h3 >From Date mode: <input type='text' name='Modelname'value={props.value} onClick={handleForm}/></h3> */}
  </div>
 <div id='Date'>
 <h5 >From Date : <input type="datetime-local" name='Fromdate' required onChange={handleForm}/></h5>
     <h5>to Date : <input  type="datetime-local"  name='Todate' required onChange={handleForm}/></h5>
     <h5>Total Hours: {hour}</h5>
     <h5> Total Hours Price : {time}</h5>
 </div>
 {/* <div id='time'>
 <h3>From Time : <input type="time" name='Fromtime' required onChange={handleForm}/></h3>
     <h3>to Time : <input type="time" name='Totime' required onChange={handleForm}/></h3>
 </div> */}

    
    {/* <input type="text"value={props.valu+props.val+props.va} /> */}
    
    <p>All details are correctly fill Confirm and Rent Now</p>
    <input id='b' required type="checkbox" name='Modelname'value={props.valu+" "+props.val} onClick={handleForm}></input>
    <button id='bookca' type='submit' name='Memail' value={props.va}  onClick={handleForm}>Rent Now</button>
    </form>

                    </Col>
                  </Row>

    
     </Container>
     </div>
    </>
  )
}

export default Bookingcars
