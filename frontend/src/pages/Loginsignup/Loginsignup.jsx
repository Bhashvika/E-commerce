import {React,useState} from 'react'
import './Loginsignup.css'
import { toast } from 'react-toastify';
const Loginsignup = () => {
  const [state,setState]=useState("Login");
  const [formdata,setFormdata]=useState({
    name:"",
    email:"",
    password:""
  })
    const changeHandler=(e)=>{
       setFormdata({...formdata,[e.target.name]:e.target.value})
  }
  const login=async ()=>{
       console.log("Login function executed",formdata);
       let responseData;
       await fetch("http://localhost:4000/product/login",{
        "method":"POST",
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata),
       }).then((res)=>res.json()).then((data)=>responseData=data);
       if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace('/');
       }
       else{
          toast.error(responseData.error)
       }
       
       
  }
  const signup= async ()=>{
       console.log("sign up function executed",formdata);
       let responseData;
       await fetch("http://localhost:4000/product/signup",{
        "method":"POST",
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata),
       }).then((res)=>res.json()).then((data)=>responseData=data);
       if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace('/');
       }
       else{
          toast.error(responseData.error)
       }
  }
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" value={formdata.name} onChange={changeHandler} name="name" placeholder='Your Name'/>:<></>}
          <input type="email" name="email" value={formdata.email} onChange={changeHandler}placeholder='Your Email Address'/>
          <input type="password" name="password" placeholder='Your Password' value={formdata.password} onChange={changeHandler}/>
        </div>
        <button onClick={state==='Login'?()=>{login()}:()=>{signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">Already have an account?<span onClick={()=>setState("Login")}>Login Here</span></p>:<p className="loginsignup-login">Create an account?<span onClick={()=>setState('Sign Up')}>Click Here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>By continuing,I agree for the terms & conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup