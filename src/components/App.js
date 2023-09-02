
import React , {useEffect, useState} from "react";
import './../styles/App.css';
import axios from "axios";
const App = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      axios.get('https://dummyjson.com/products')
      .then(res => {
        setData(res.data)
        setLoading(false);
      })
      .catch(error => {
        setError(error.data)
        setLoading(false);
      });
  }, []);

  return (
    <div>
        <h1>Data Fetched from API</h1>
        {loading && <p>Loading...</p>}
        {error && <p>An error occured: </p>}
        {
          !error && data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data found</p>
        }
    </div>
  )
}

export default App
