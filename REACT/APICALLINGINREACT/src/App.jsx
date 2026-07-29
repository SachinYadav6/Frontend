import Card from "./Card";
import { useState } from "react";
function App() {
  const [images, setImages] = useState([ ]);

  async function getData() {

    const response = await fetch('https://picsum.photos/v2/list?page=2&limit=30');

    console.log(response);

    const data = await response.json();
    console.log(data);
    setImages(data)
    
  }
  
  
  return (
    <div>
      <div className="card">
        {
          images.map((elem,idx) => (
            <Card
              key={idx}
              img={elem.download_url}
              heading={elem.author}

            
            />
          ))
        }
      </div>
       <button onClick={getData}>
        getdata
      </button>
          

    </div>
  )
}
export default App;
