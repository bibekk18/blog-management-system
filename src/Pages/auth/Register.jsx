import React from 'react'
import Form from './components/form/Form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { baseurl } from '../../config'

const Register = () => {

  const navigate =useNavigate()
  const handleRegister=async(data)=>{

const response=await axios.post(baseurl+'/register',data)
console.log(response)
if(response.status==201)
{
  navigate('/login')
}else{
  alert("Registration failed")
}

  }
  return (
  
<Form type='register'onSubmit={handleRegister}/>
   
  )
}

export default Register