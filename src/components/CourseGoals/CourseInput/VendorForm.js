import React from "react";
import './VendorForm.css';
import { Link } from "react-router-dom";
import Plant from "./Plant";
const VendorForm =()=>{
return(
  <div>

  <meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma"></link>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster&effect=shadow-multiple"></link>

<div class="w3-container w3-center  w3-pale-blue"  style={{height:"300px"}}>
      
  <h2 class="w3-xxxlarge font-effect-shadow-multiple "> Explore Plants for Home & Office</h2>
  <h3 class="w3-monospace" >ONLINE PLANTS NURSERY</h3>
 
  <h3><button   class="w3-button   w3-teal w3-round-xxlarge">
    <Link to='/vList' className="kuhu"> ORDER NOW</Link>
    </button></h3>

</div>

<div class="w3-main w3-content w3-padding  " className="city">

  
  <div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter w3-animate-zoom">
      <img src="https://static.wixstatic.com/media/496d05_3270ee5057d346858dac87308f23bca1~mv2.jpg/v1/crop/x_50,y_0,w_500,h_600/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nurserylive-sansevieria-trifasciata-zeylanica-snake-plant-1.jpg" alt="Sandwich" style={{width:"70%"}} />
      <h3>Snake Plants </h3>
      
      <p>5 Inch tall Plant</p>
      <p><button class="w3-button w3-black w3-round-xxlarge">
        <Link to='./Plant' className="kuhu">ORDER NOW</Link>
        </button></p>
    </div>
    <div class="w3-quarter w3-animate-zoom">
      <img src="https://media.ugaoo.com/catalog/product/cache/bf904fa088be7169b4178c352b6a4f7a/c/r/crassulagreenmini_45.png" alt="Steak" style={{width:"70%"}} />
      <h3>Money Plant-</h3>
      
      <p><button class="w3-button w3-black w3-round-xxlarge"><Link to='./Plant' className="kuhu">ORDER NOW</Link></button></p>
    </div>
    <div class="w3-quarter w3-animate-zoom">
      <img src=" https://static.wixstatic.com/media/496d05_1788e6f4c841486ab3a1d6966ae1699c~mv2.jpg/v1/crop/x_50,y_0,w_500,h_600/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nurserylive-jade-plant-elephant-bush-small-1.jpg " alt="Chgerries" style={{width:"70%"}} />
      <h3>jade plant</h3>
      
      <p>5 Inch tall Plant</p>
      <p><button class="w3-button w3-black w3-round-xxlarge"><Link to='./Plant' className="kuhu">ORDER NOW</Link></button></p>
    </div>
    <div class="w3-quarter w3-animate-zoom">
      <img src="https://static.wixstatic.com/media/496d05_82272d677b364c93b7888cd761555cc5~mv2.jpeg/v1/crop/x_67,y_0,w_666,h_800/fill/w_269,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/peace-lily-plant-grubox.jpeg" alt="Pasta and Wine" style={{width:"70%"}} />
      <h3>Peace Lily</h3>
      <p>5 Inch tall plants</p>
      <p><button class="w3-button w3-black w3-round-xxlarge"><Link to='./Plant' className="kuhu">ORDER NOW</Link></button></p>
    </div>
  
    
  
    </div>
</div>
<div class="w3-main w3-content w3-padding  " className="city">

  
  <div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter w3-animate-zoom">
      <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730" alt="Sandwich" style={{width:"70%"}} />
      <h3> Plant Pack for helthy home office</h3>
      
      <p>5 Inch tall Plant</p>
      <p><button class="w3-button w3-black w3-round-xxlarge"><Link to='./Plant' className="kuhu">ORDER NOW</Link></button></p>
    </div>
    <div class="w3-quarter w3-animate-zoom">
      <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-pack-of-3-good-luck-jade-plants-in-ceramic-pots-16969154297996_220x220.jpg?v=1634225377" alt="Steak" style={{width:"70%"}} />
      <h3>Pack of 3 good luck jade plants in ceramic Pots</h3>
      
      <p><button class="w3-button w3-black w3-round-xxlarge"><Link to='./Plant' className="kuhu">ORDER NOW</Link></button></p>
    </div>
    <div class="w3-quarter w3-animate-zoom">
      <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-5-best-fragrant-plants-16968509653132_220x220.jpg?v=1634209158 " alt="Chgerries" style={{width:"70%"}} />
      <h3>5 Best Fragrant plants</h3>
      
      <p>5 Inch tall Plant</p>
      <p><button class="w3-button w3-black w3-round-xxlarge"><Link to='./Plant' className="kuhu">ORDER NOW</Link></button></p>
    </div>
    <div class="w3-quarter w3-animate-zoom">
      <img src="https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-plant-pack-for-healthy-home-office-16969206595724_220x220.jpg?v=1634226261" alt="Pasta and Wine" style={{width:"70%"}} />
      <h3>Plant pack for Healthy home office</h3>
      
      <p><button class="w3-button w3-black w3-round-xxlarge"><Link to='./Plant' className="kuhu">ORDER NOW</Link></button></p>
    </div>
  
    
  
    </div>
</div>


<Plant />

</div>
)
}
export default  VendorForm;