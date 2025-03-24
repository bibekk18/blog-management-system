import React from 'react'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseurl } from '../../config'

const Login = () => {
 
  
    const navigate =useNavigate()
    const handleLogin=async(data)=>{
  
  const response=await axios.post(baseurl +'/login',data)
  if(response.status==200)
  {
    localStorage.setItem('token',response.data.token)
    navigate('/')
  }else{
    alert("login failed")
  }
  
    

  }
  return (
  <Form type='login' onSubmit={handleLogin}/>

  )
}

export default Login