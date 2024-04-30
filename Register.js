import React from 'react'
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import '../pages/Login.css'
import { Link } from "react-router-dom";
import base from '../Images/backhd.jpeg'
import { FaEye } from "react-icons/fa";
import { useEffect,useState } from 'react'
import { useNavigate} from "react-router-dom";


const Register = () => {
   
   const [form, setForm] = useState({});
   let aa=useNavigate()


   const getUs = async ()=>{
      const response = await fetch('http://localhost:8080/4',{
        method:'GET',
      })
     console.log(response.status);
     console.log(response);
if(response.status==200){
   alert("You are Already Register Please Login ")
}
else{
   alert("Successfully Register ")
   aa("/Login")


}
    
   //   alert(data)
    }
  
   

   const [showPassword, setShowPassword] = useState(false);
   const [password, setPassword] = useState("");
 
   const handleForm = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
 
   const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(form);
    const response = await fetch('http://localhost:8080/',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
 
    })
    alert("l")
    const data = await response.json();
    console.log(data,form,"hh");
  }
  return (
   
    <div id='back' >
    <Container fluid style={{justifyContent:'center',display:'flex' }}>
<Row>
  <Col md='10'>
 
      
      <div class="login">
         {/* <img src={base} alt="login image" class="login__img"/> */}

         <form  class="login__form" onSubmit={handleSubmit}>
            <h1 class="login__title">Register</h1>

            <div class="login__content">
            <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="name" required 
                  name='username'
                     class="login__input" id="login-email" placeholder=" " onChange={handleForm} />
                     <label for="login-email" class="login__label" >Name</label>
                  </div>
               </div>
            <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="email" required 
                  name='email'
                     class="login__input" id="login-email" placeholder=" " onChange={handleForm} />
                     <label for="login-email" class="login__label" >Email</label>
                  </div>
               </div>
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="" required 
                  name='Number'
                     class="login__input" id="login-email" placeholder=" " onChange={handleForm} />
                     <label for="login-email" class="login__label" >Number</label>
                  </div>
               </div>

               <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input  type={
                        showPassword ? "text" : "password"
                    }  value={password}  onChange={(e) =>{
                      setPassword(e.target.value)
                      setForm({
                        ...form,
                        [e.target.name] : e.target.value
                      })
                    }
                  } required class="login__input" id="login-pass" placeholder=" " minLength={8} name='password' />
                     <label for="login-pass" class="login__label">Password</label>
                     <input class="ri-eye-off-line login__eye" id="login-eye" type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }></input>
                  </div>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-group">
                  
               </div>

            </div>

            <button type='submit' class="login__button" onClick={getUs}>Register</button>


         </form>
      </div>
      
  
  {/* <div class="login-container">
    <h2 id='login'>Login</h2>
    <form>
      <div class="input-group">
        <label for="">Username:</label>
        <input type="text" id="username" name="username" required onChange={logg}/>
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required minLength={8} placeholder='minimum length 8'/>
        <Link to='/Register' id='lobut' class="login-btn">Register</Link>
      </div>
      <button type="submit" class="login-btn" onClick={log}>Login</button>
    </form>
  </div> */}
  </Col>
</Row>

    </Container>
    </div>
  )
}

export default Register
