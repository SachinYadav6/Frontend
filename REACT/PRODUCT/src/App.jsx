import Demo2 from "./Demo2";
import Destructering from "./Destructering";
import Navbar from "./Navbar";
import ProsDemo from "./ProsDemo";

export default function App(){
  return (
    <div>
      <h1>product</h1>
      <Navbar />
      <ProsDemo
        
      />
      <Demo2 />
      <Destructering
        fullName={"sachin kumar"}
        description={"nver give sachib bahu."}
        p={ "kuch dikkat to ho rha hai"}
      
      />
      
    </div>
  )
};



