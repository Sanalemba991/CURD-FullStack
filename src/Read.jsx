import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Read() {

  const [data,setData]=useState([])

const {id}=useParams();

  useEffect(()=>{
    axios.read(`http://localhost:3000/users/`+id)
    .then(res=>{res.data})


  },[])

  return (
    <div>
      
    </div>
  )
}

export default Read
