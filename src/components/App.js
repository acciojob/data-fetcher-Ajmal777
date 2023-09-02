
import React , {useEffect, useState} from "react";
import './../styles/App.css';
import axios from "axios";
const App = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      axios.get('https://dummyjson.com/product')
      .then(res => {
        setData(res.data)
        setLoading(false);
      })
      .catch(error => {
        setError(true)
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div>
      {error && <p>An error occured: </p>}
      {!error &&
        <div>
          <h1>Data Fetched from API</h1>
          {loading && <p>Loading...</p>}
          {
            data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data found</p>
          }
        </div>
      }
    </div>
  )
}

export default App
