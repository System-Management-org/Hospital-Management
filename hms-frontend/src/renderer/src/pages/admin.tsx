import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/admin/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {message}
    </div>
  );
}

export default Admin