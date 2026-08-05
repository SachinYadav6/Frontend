import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "../css/Login.css";


function Login(){


const { login } = useContext(AuthContext);



const [formData,setFormData] = useState({

email:"",

password:""

});



const handleChange = (e)=>{


setFormData({

...formData,

[e.target.name]:e.target.value

});


};







const handleSubmit = (e)=>{


e.preventDefault();



const result = login(formData);



if(result){


alert("Login Successful");



// clear input after login

setFormData({

email:"",

password:""

});


}

else{


alert("Invalid Email or Password");


}



};








return(


<div className="login">


<h1>
Login
</h1>





<form onSubmit={handleSubmit}>


<input

type="email"

name="email"

placeholder="Enter Email"

value={formData.email}

onChange={handleChange}

/>





<input

type="password"

name="password"

placeholder="Enter Password"

value={formData.password}

onChange={handleChange}

/>





<button type="submit">

Login

</button>



</form>



</div>


)


}



export default Login;