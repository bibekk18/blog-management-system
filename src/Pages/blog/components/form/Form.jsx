import React, { useState } from 'react'

const Form = ({type,onSubmit}) => {
  const [data,setData] =useState(
  {
    title:'',
    subtitle:'',
    subtitle:'',
    description:'',
    image:'',

  })
  const handleChange = (e) => {

    const{name,value}=e.target 
    setData ({
      ...data,
      [name]:name === 'image'?e.target.files[0]:value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    onSubmit(data)
  }
  
  return (
    <div class="flex items-center justify-center p-12">

    <div class="mx-auto w-full max-w-[550px]">
     <h1 className='text-4xl mt-19 m-10 text-blue-600'>{type} BLOG</h1>
  
      
      <form onSubmit={handleSubmit}>
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="name"
           
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
         onChange={handleChange} />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Subtitle
          </label>
          <input
            type="text"
            name="subtitle"
            id="email"
            
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            onChange={handleChange} />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            category
          </label>
          <input
            type="text"
            name="category"
            id="email"
            
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            onChange={handleChange}/>
        </div>
        <div class="mb-5">
          <label
            for="subject"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Imagee
          </label>
          <input
            type="file"
            name="image"
            id="subject"
            
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            onChange={handleChange}/>
        </div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Description
          </label>
          <textarea
            rows="4"
            name="description"
            id="message"
            placeholder="Type your message"
            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            onChange={handleChange}></textarea>
        </div>
        <div>
          <button type="submit"
            class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Form