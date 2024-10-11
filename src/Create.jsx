import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phoneNo: ""
  });

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/users', value)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1>Create Me</h1>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Enter Name'
            onChange={e => setValue({ ...value, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            placeholder='Enter Email'
            onChange={e => setValue({ ...value, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor='phoneNo'>Phone:</label>
          <input
            type='tel'
            name='phoneNo'
            placeholder='Enter Phone Number'
            onChange={e => setValue({ ...value, phoneNo: e.target.value })}
            required
          />
        </div>
        <button type='submit'>Submit</button>
        <Link to='./'>Back</Link>
      </form>
    </div>
  );
}

export default Create;
