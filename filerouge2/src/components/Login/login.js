import React, { useState } from 'react';
import {MdAccountCircle} from "react-icons/md";
import {RiLockPasswordLine} from "react-icons/ri";
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";
import './login.css';
import wave from './image/wave.svg';
import bg from './image/undraw_Mobile_application_mr4r.svg';
import avatar from './image/undraw_profile_pic_ic5t (1).svg';



const Login = () => {
	const history = useHistory();
	 const [userName, setUserName] = useState();
	 const [password, setPassword] = useState();
 
	 const handleSubmit = (e) => {
		 e.preventDefault();
 
	 const Admin = {userName,password};
 
	 axios.post(`http://localhost:3030/admin/login`, Admin)
		 .then(res => {
			 console.log(res)
			 if(!res.data.message){ 
			  let token= res.data.token;
			  localStorage.setItem("token", token);
			  history.push('/home');
			  toastr.info('User is authenticated SuccessFully', `Welcome ${Admin.userName}`, {
				 positionClass: "toast-top-left",
			 })
 
			 }else{
				 toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !', {
					 positionClass: "toast-top-left",

				 })
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
			<form action="" onSubmit={handleSubmit}>
				<img src={avatar}/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<MdAccountCircle/>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" className="input" required 
			  onChange={e => setUserName(e.target.value)}
			   placeholder="Username"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
					  <RiLockPasswordLine/>
           		   </div>
           		   <div className="div">
           		    	<input type="password" className="input" required 
			value={password} 
			onChange={e => setPassword(e.target.value)}
			 placeholder="Password"/>
            	   </div>
            	</div>
            	<input type="submit" className="btn" value="Login"/>
				<p>	You don't have an acount ?<Link to="/signup" className="register"> Register now</Link></p>


            </form>
        </div>
    </div>
               
        </div>
        
    )
}


export default Login
