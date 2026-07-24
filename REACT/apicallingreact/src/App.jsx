function App() {
  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await response.json()
    console.log(data[0].email);
    
  }
  return (
    <div>
      <button
      onClick={getData}>api calling</button>
    </div>
  )
  
}
export default App;