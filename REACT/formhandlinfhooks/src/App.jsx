function App() {
  
  function submithandler(e) {
    e.preventDefault();
    console.log('form submitted');
    
    
  }
  return (
    <div>
      <form
        onSubmit={
          (e) => {
            submithandler(e);
          }
        }
      >
        <input type="text" placeholder="enter the name" />
        <button>submit</button>
      </form>
    </div>
  )
}
export default App;