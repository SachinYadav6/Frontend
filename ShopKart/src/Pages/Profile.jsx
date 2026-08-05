import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

import "../css/Profile.css";


function Profile(){


const { user, logout } = useContext(AuthContext);





return(


<div className="profile-page">





{

user ?



<div className="profile-card">





<div className="profile-icon">

👤

</div>





<h1>

My Profile

</h1>







<div className="profile-info">


<p>

<strong>Name:</strong> {user.name}

</p>





<p>

<strong>Email:</strong> {user.email}

</p>



</div>








<div className="profile-buttons">



<Link to="/orders">


<button>

My Orders

</button>


</Link>







<Link to="/wishlist">


<button>

Wishlist ❤️

</button>


</Link>







<button

className="logout"

onClick={logout}

>

Logout

</button>





</div>







</div>





:





<div className="login-message">


<h2>

Please Login First

</h2>



<Link to="/login">


<button>

Login

</button>


</Link>


</div>



}



</div>


)


}


export default Profile;