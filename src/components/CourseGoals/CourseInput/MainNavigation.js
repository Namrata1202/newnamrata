import { Link } from "react-router-dom";
const MainNavigation =()=>{
return(
  <div>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
 

<div class="w3-bar w3-border  w3-teal w3-padding-large">
  <Link to='/VendorForm' class="w3-bar-item w3-button">Home</Link>
  
  <Link to='/VList' class="w3-bar-item w3-button">Login </Link>
</div>













  </div>
)
}

 export default MainNavigation;