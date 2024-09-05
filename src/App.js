import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UL from './Ul';

function App() {
  const [sfer, setsfer] = useState([]); // Initialize state as an empty array

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log("res =>", res.data);
        setsfer(res.data);
      })
      .catch(err => console.log(err));
  }, []); // Dependency array ensures this runs only once

  return (
    <div>
      {sfer.length > 0 ? (
        sfer.map((el) => <UL key={el.id} element={el} />) // Unique key for each mapped element
      ) : (
        <p>Loading...</p> // Show a loading message while waiting for data
      )}
    </div>
  );
}

export default App;
