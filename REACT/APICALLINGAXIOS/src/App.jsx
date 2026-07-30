import axios from "axios";
import { useState } from "react";

function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  
  async function getData() {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=30`);
    console.log(res.data);
    
      setData(res.data)


  }
  /* page change */ 
  function preButton() {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      getData(newPage);
    }
    
  }

  function nowButton() {
    const newPage = page + 1;
    setPage(newPage);
    getData(newPage);
    
    
  }
  return (
    <div>
      <div className="container">
        {
          data.map((elem, idx) => (
            <div className="card"  key={elem.id}>
              <h1>{elem.author}</h1>
              <img src={elem.download_url} alt="img" width="300" />
            </div>

          ))
        }
      </div>
      {/* <button onClick={getData}>getData</button> */}
      <div className="btn">
        <button onClick={preButton}>pre</button>
      <button onClick={nowButton}>now</button>
      </div>
    </div>
  )
}
export default App;