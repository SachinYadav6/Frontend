import UserContext from './create'
import Profile from './Profile'
export default function App() {
 
  function name() {
    console.log("sachin kumar");
    
  }
  return (
    <UserContext.Provider value={name}>
        <Profile/>
      </UserContext.Provider>
  
  )
}
