import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Logout.css'
import Defaultlayout from './Defaultlayout'
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import '../pages/Login.css'


const Logout = (props) => {
    console.log(props.value)
    console.log(props.val)
    let aa=useNavigate()

  const   data=()=> {
alert("pp")
props.getlog("gg")
aa("/")

    }
  return (
    <>
    <div className="Logoutpage" id='back'>
        
                {/* <h5 id='lfont'>Name:{props.value}</h5>
                <h5 id='lfont'>E-mail:{props.va}</h5>
                <h5 id='lfont'>Phone-Number:{props.value}</h5>
                <button class="logouttitle">Logout</button> */}
         {/* <img src={base} alt="login image" class="login__img"/> */}

         <form  class="logoutform" >
            {/* <h1 class="login__title">Hello,{props.value} </h1> */}

            <div class="login__content">
               <div class="login__box">

               <h5 id='lfont'>Name:{props.value}</h5>
               </div>
               <div class="login__box">
               <h5 id='lfont'>E-mail:{props.va}</h5>
               </div>
              

               <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                  <h5 id='lfont'>Phone-Number:{props.val}</h5>
                    
                  </div>
               </div>
            </div>


            <button  onClick={data }  class="login__button">Logout</button>
         </form>
      </div>
               
    </>
  )
}

export default Logout
