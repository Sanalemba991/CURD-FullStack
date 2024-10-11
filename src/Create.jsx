import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [value,setValue]=useState({
    name:"",
    email:'',
     phoneNo:''
  })
  const navigate=useNavigate
  const submit=(e)=>{
    event.preventDefault();
  axios.post('http://localhost:3000/users',value)
  .then(res=>{console.log(res);
    navigate('/')
  })
  .catch(err=> console.log(err));
  }
  


  
  return (
    <>
    <div>
      <h1>Create Me</h1>
     <form onSubmit={submit}>
      <div>

      <label htmlFor='name'>Name:</label>
      <input type='text' name='name' placeholder='Enter Name'
      onChange={e=>setValue({...value,name:e.target.value})}></input>
      </div>
     <div>
     <label htmlFor='email'>Email:</label>
     <input type="text" name='email'placeholder='Enter Email'onChange={e=>setValue({...value,email:e.target.value})}></input>

     </div>
     
      <label htmlFor='email'>Phone:</label>
    <input type='text' name='phoneNo' placeholder='enter phone number'onChange={e=>setValue({...value,phoneNo:e.target.value})}></input>
    <button >Submit</button>
    <Link to='./'>Back</Link>
     </form>

    </div>
    </>
  )
}

export default Create
