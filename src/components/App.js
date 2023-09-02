
import React , {useEffect, useState} from "react";
import './../styles/App.css';
import axios from "axios";
const App = () => {
  const [data, setData] = useState('');
  useEffect(() => {
      axios.get('https://dummyjson.com/products')
      .then(res => setData(JSON.stringify(res.data)))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <h1>Data Fetched from API</h1>
        {
          data ? <pre>{data}</pre> : <p>Loading...</p>
        }
    </div>
  )
}

export default App
