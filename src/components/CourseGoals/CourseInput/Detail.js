
import { useParams } from 'react-router-dom';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Snake Plants",
    description: "Finest fish and veggies",
    price: "PRICE Rs-100",
    Myimg:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
  order: "View detail",
  offer: "50% off"



  },
  {
    id: "m2",
    name: "5 Best Fragrant plants",
    description: "A german specialty!",
    price: "PRICE Rs-450/",
    Myimg:
    "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-plant-pack-for-healthy-home-office-16969206595724_220x220.jpg?v=1634226261",
    order: "View detail",
    offer: "50% off"
  },
  {
    id: "m3",
    name: "Plant pack for Healthy home office",
    description: "American, raw, meaty",
    price: "PRICE Rs-213",
    Myimg:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-pack-of-3-good-luck-jade-plants-in-ceramic-pots-16969154297996_220x220.jpg?v=1634225377",
      order: "View detail",
      offer: "50% off"
  },
  {
    id: "m4",
    name: "Peace Lily",
    description: "Healthy...and green...",
    price: "PRICE Rs-",
    Myimg:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
      order: "View detail",
      offer: "50% off "
  },

  {
    id: "m5",
    name: "Peace Lily",
    description: "Healthy...and green...",
    price: 18.99,
    Myimg:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
      order: "View detail",
      offer: "50% off"
  },
  {
    id: "m6",
    name: "5 Best Fragrant plants",
    description: "Healthy...and green...",
    price: 18.99,
    Myimg:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
      order: "View detail",
      offer: "50% off"
  },

  {
    id: "m7",
    name: "Plant pack for Healthy home office",
    description: "Healthy...and green...",
    price: 18.99,
    Myimg:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
      order: "View detail",
      offer: "50% off"
  },
  {
    id: "m8",
    name: "Plant pack for Healthy home office",
    description: "Healthy...and green...",
    price: 18.99,

    Myimg:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
      order: "View detail",
      offer: "50% off"
  },
];



const Detail = () => {
const params = useParams ();
const plants = DUMMY_MEALS.find( plants =>plants.id===params.myId);

  return (
    <div>
<div class="w3-container w3-center  w3-pale-blue"  style={{height:"150px"}}>
      
      <h2 class="  w3-text-pink"> Explore Plants for Home & Office</h2>


</div>
      
      <div class="w3-row w3-container w3-margin">
  
  <div class="w3-col s6  w3-center">
        
      <img src={plants.Myimg} alt={plants.id} style={{width:"70%"}} />
        </div>
        <div class="w3-col s6 ">
        <p>{plants.myId}</p>
        <h1 class= "w3-text-pink">{plants.name}</h1>
        <h2 class="w3-text-pink">{plants.offer}</h2>
        <h3>{plants.price}</h3>
         
         <div class="w3-panel w3-border-bottom">
    <h1 class="w3-text-pink">Delivery Information</h1>
  </div>
  <p>image displayed is indicative in nature
Actual product may vary in shape or design as per the availability
The number of leaves and the size of the plant depends on seasonal availability
Since flowers are seasonal in nature flowering plants might be delivered without them
Flowers if present in plant may be in fully bloomed semi-bloomed or bud 
Since this product is shipped using the services of our courier partners, the date of delivery is an estimate.
Your gift may be delivered prior or after the chosen date of delivery.
A courier product is delivered separately from other hand delivered products.
No deliveries are made on Sundays and National Holidays.
Our courier partners do not call prior to delivering an order, so we recommend that you provide an address at which someone will be present to receive the package.
The delivery cannot be redirected to any other address.
All courier orders are carefully packed and shipped from our warehouse.
Soon after the order has been dispatched, you will receive a tracking number that will help you trace your gift.</p>

  <div class="w3-row">
              <div class="w3-col s6  w3-center">
                <h2>
                <button class="w3-button w3-border w3-pink w3-hover-purple">ADD TO CART</button>
                </h2>
              </div>
              <div class="w3-col s6 w3-center">
                <h2>
                <button class="w3-button w3-border w3-pink w3-hover-purple">BUY NOW</button>
                </h2>
              </div>
              </div>

      </div>
      </div>

    
    </div>
  );
};
export default Detail;
