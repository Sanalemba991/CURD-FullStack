import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch users');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div >
        <h1 className='head'>User List</h1>
        <div>ADD</div>
        
        <Link to="/create">Create</Link>
        {error && <p>{error}</p>}
        {data.map(user => (
          <div className='bs'> 
          <div className='box'>   <div key={user.id} className="user-item">
          <span className="Name">Name: {user.name}</span> | 
          <span className="username">Username: {user.username}</span> | 
          <span className="email">Email: {user.email}</span> | 
          <span className="phone">Phone: {user.phone}</span> | 
          <span className="website">Website: {user.website}</span>
          <Link to={`/read/${user.id}`}>Read</Link>
          <button>Edit</button>
          <button>Delete</button>
          </div>
      </div></div>
   
  
        ))}
      </div>
    </>
  );
}

export default Home;
