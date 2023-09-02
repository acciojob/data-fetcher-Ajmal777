
import React , {useEffect, useState} from "react";
import './../styles/App.css';
import axios from "axios";
const App = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
      axios.get('https://dummyjson.com/products')
      .then(res => setData(res.data.products))
      .catch(error => setError(error.data));
  }, []);

  return (
    <div>
        <h1>Data Fetched from API</h1>
        {error && <p>An error occured: {error.message}</p>}
        {
          !error && data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>
        }
    </div>
  )
}

export default App
