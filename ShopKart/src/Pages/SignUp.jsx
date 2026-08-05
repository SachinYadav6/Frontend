import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "../css/Signup.css";


function Signup(){


const { signup } = useContext(AuthContext);



const [formData,setFormData] = useState({

name:"",

email:"",

password:""

});






const handleChange = (e)=>{


setFormData({

...formData,

[e.target.name]: e.target.value

});


};








const handleSubmit = (e)=>{


e.preventDefault();


signup(formData);



alert("Signup Successful");



// clear input after signup

setFormData({

name:"",

email:"",

password:""

});


};







return(


<div className="signup">


<h1>
Create Account
</h1>





<form onSubmit={handleSubmit}>


<input

type="text"

name="name"

placeholder="Enter Name"

value={formData.name}

onChange={handleChange}

/>





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

Signup

</button>



</form>



</div>


)


}



export default Signup;