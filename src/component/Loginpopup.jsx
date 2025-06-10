import React, { useState, useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios'

const Loginpopup = ({setShowLogin}) => {

  const {url,setToken}=useContext(StoreContext)

  const [currentState,setCurrentState]=useState("Sign Up");
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({
      ...data,
      [name]:value
    }))
  }

  const onLogin=async (e)=>{
    e.preventDefault();
    let newUrl=url;
    if(currentState==="Login"){
      newUrl+="/api/user/login"
    }
    else{
      newUrl+="/api/user/register"
    }
    const res=await axios.post(newUrl,data);

    if(res.data.success){
      setToken(res.data.token);
      localStorage.setItem("token",res.data.token);
      setShowLogin(false);
    }
    else{
      alert(res.data.message);
    }
  }

  return (
    <div className='absolute z-[1] w-full h-full bg-[#00000090] grid top-0'>
      <form onSubmit={onLogin}
        className='place-self-center w-[max(23vw,33px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[25px] py-[30px] rounded-[8px] text-[14px] animate-login'>
          <div className='flex justify-between items-center text-black'>
            <h2 className='font-semibold text-[20px]'>{currentState}</h2>
            <img 
              onClick={() => setShowLogin(false)} 
              src={assets.cross_icon} 
              className='w-16px cursor-pointer'/>
          </div>
        <div className='flex flex-col gap-5'>
          { currentState === "Login" ? <></> : <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your name' required className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]'/>}
          <input 
            type="email" 
            placeholder='Your email' 
            required 
            className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]' 
            name="email"
            onChange={onChangeHandler}
          />
          <input 
            type="password" 
            placeholder='Password' 
            required 
            className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]'
            name="password"
            onChange={onChangeHandler}
            value={data.password}
          />
        </div>
        <button type='submit' className='border-none p-[10px] rounded-[4px] text-white bg-[#DC143C]  curdor-pointer text-[15px]'>{ currentState === "Sign Up" ? "Create Account" : "Login" }</button>
        <div className='flex items-start gap-2 mt-[-15px]'>
          <input 
            type="checkbox" 
            required 
            className='mt-[5px]'
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        { currentState === "Login" ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}className='font-lg text-[#DC143C] cursor-pointer'>Click here</span></p> : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}className='font-semibold text-[#DC143C] cursor-pointer'>Login here</span></p>}
      </form>
    </div>
  )
}

export default Loginpopup