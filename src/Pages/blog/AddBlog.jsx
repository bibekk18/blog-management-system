import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import axios from 'axios'
import { baseurl } from '../../config'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const navigate =useNavigate()
  const handleCreateBlog=async (data)=>{
    const response =await axios.post(`${baseurl}/blog`,data,{
      headers:{
        "Content-Type":"multipart/form-data",
        "Authorization":localStorage.getItem('token')
      }
    })
    if(response.status ===201)
    {
      navigate('/')
    }
    else{
      alert("something went wrong")
    }

  }
  return (
   < Layout>
 <Form type='CREATE' onSubmit={handleCreateBlog}/>
   
   </Layout>
  )
}

export default AddBlog