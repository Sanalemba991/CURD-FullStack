import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <h1>User List</h1>
        <div>ADD</div>
        <Link to="/create">Create</Link>
        {error && <p>{error}</p>}
        {data.map(user => (
          <div key={user.id}>
            ID: {user.id} | Name: {user.name} | Username: {user.username} | Email: {user.email} | Phone: {user.phone} | Website: {user.website}
           <Link to={`/read/${user.id}`}></Link>
            <button>Edit</button>
            <button>Delete</button>
         
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
