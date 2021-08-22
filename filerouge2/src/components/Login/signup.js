import React, { useState } from 'react';
import {useHistory } from "react-router-dom";
import axios from 'axios';
import {FaFacebookSquare,FaGoogle,FaUser}  from "react-icons/fa";
import {AiFillTwitterCircle,AiFillLinkedin} from "react-icons/ai";
import {MdAccountCircle,MdEmail} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import './login.css';
import bg from './image/undraw_Mobile_application_mr4r.svg';
import avatar from './image/undraw_profile_pic_ic5t (1).svg';
import wave from './image/wave.svg';



const Signup = () => {

  const history = useHistory();
 
   const [firstName, setFirstName] = useState();
     const [lastName, setLastName] = useState();
   const [userName, setUserName] = useState();
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
   const admin = {firstName,lastName,userName,email,password};
 
   axios.post(`http://localhost:3030/admin/authentication`, admin)
     .then(res => {
         if(res.error){
         return false
       }else{
         
          console.log(res.data);
                history.push('/login')
       }
      
     })
   }
    return (
        <div>
        <img className="wave" src={wave}/>
	<div className="container">
		<div className="img">
			<img src={bg}/>
		</div>
		<div className="login-content">
		<form action="#" class="sign-up-form" onSubmit={handleSubmit}>
				<img src={avatar}/>
				
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" required data-parsley-no-focus
			 value={firstName}
			  onChange={e => setFirstName(e.target.value)}
			   placeholder="firstName" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text"required data-parsley-no-focus
			 value={lastName}
			  onChange={e => setLastName(e.target.value)}
			   placeholder="lastName" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" required data-parsley-no-focus
			 value={userName}
			  onChange={e => setUserName(e.target.value)}
			   placeholder="Username"  />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email"  required data-parsley-no-focus
			 value={email}
			  onChange={e => setEmail(e.target.value)}
			   placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" required data-parsley-no-focus
			value={password} 
			onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
               <FaFacebookSquare/>
              </a>
              <a href="#" className="social-icon">
                <AiFillTwitterCircle/>
              </a>
              <a href="#" className="social-icon">
                <FaGoogle/>
              </a>
              <a href="#" className="social-icon">
                <AiFillLinkedin/>
              </a>
            </div>           	
            </form>
        </div>
    </div>
               
        </div>
        
    )
}


export default Signup
