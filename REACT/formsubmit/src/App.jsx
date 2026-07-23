
function App() {
  function submit(e) {
    e.preventDefault();
    console.log('form submitted',e);
    
    
  }
  
  return (
    <div>
      <form onSubmit={
        submit
      } >
        <h1>form</h1>
        <input type="text" placeholder="enter the name" />
        <br />
        <button
          
        >sumbit</button>
      </form>
    </div>
  )
}
 export default App;



