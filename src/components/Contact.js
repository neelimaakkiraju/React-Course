import React from 'react'

const Contact = () => {
  return (
    <div>
     <h1 className='text-center font-serif text-2xl p-2 m-2'>Contact Us</h1>
     <div className='border-2 w-6/12 mx-auto border-gray-500 rounded-md'>
     <form className='flex flex-col p-4 m-4 justify-center align-middle text-black'>
      <input type='text' placeholder='Name' className='border p-2 m-2 rounded-lg'/>
      <input type="email" placeholder='Email'  className='border p-2 m-2 rounded-lg'/>
      <textarea placeholder='Message' name='Meaasage'  className='border p-2 m-2 rounded-lg'/>
      <button className='p-2 m-2 bg-slate-700 text-white rounded-md'>
        Submit
      </button>
      
     </form>
     </div>
    </div>
  )
}

export default Contact


