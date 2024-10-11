import React, { useState } from 'react'

function Create() {
  const [value,setValue]=useState({
    name:"",
    email:'',
     phoneNo:''
  })
  return (
    <>
    <div>
      <h1>Create Me</h1>
     <form>
      <div>

      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' placeholder='Enter Name'></input>
      </div>
     <div>
     <label htmlFor='email'>Email:</label>
     <input type="text" name='email'placeholder='Enter Email'></input>

     </div>
     
      <label htmlFor='email'>Phone:</label>
    <input type='text' name='phoneNo' placeholder='enter phone number'></input>
    <button >Submit</button>
     </form>

    </div>
    </>
  )
}

export default Create
