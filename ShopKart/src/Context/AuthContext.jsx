import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();



function AuthProvider({children}){


const [user,setUser] = useState(()=>{


const savedUser = localStorage.getItem("user");


return savedUser ? JSON.parse(savedUser) : null;


});





useEffect(()=>{


if(user){

localStorage.setItem(

"user",

JSON.stringify(user)

);

}

else{

localStorage.removeItem("user");

}


},[user]);






// Signup

const signup = (userData)=>{


const newUser = {

name:userData.name,

email:userData.email,

password:userData.password

};



setUser(newUser);


};







// Login

const login = (userData)=>{


const savedUser = JSON.parse(

localStorage.getItem("user")

);



if(

savedUser &&

savedUser.email === userData.email &&

savedUser.password === userData.password

){


setUser(savedUser);


return true;


}


return false;


};







// Logout

const logout = ()=>{


setUser(null);


};







return(

<AuthContext.Provider

value={{

user,

signup,

login,

logout

}}

>


{children}

</AuthContext.Provider>

)

}



export default AuthProvider;