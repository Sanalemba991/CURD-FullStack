import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
function Read() {

  const [data,setData]=useState([])

const {id}=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/`+id)
    .then(res=>setData(res.data))


  },[])

  return (
    <div>
      <div>
        <strong>Name:{data.name}</strong>
        <strong>Email:{data.email}</strong>
        <strong>Phone:{data.phoneNo}</strong>
      </div>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Read
