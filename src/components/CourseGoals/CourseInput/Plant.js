import { Link } from "react-router-dom";
const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Snake Plants",
      description: "Finest fish and veggies",
      price: "PRICE Rs-100",
      Myimg:
        "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
    order: "View detail",
    


    },
    {
      id: "m2",
      name: "5 Best Fragrant plants",
      description: "A german specialty!",
      price: "PRICE Rs-450/",
      Myimg:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-plant-pack-for-healthy-home-office-16969206595724_220x220.jpg?v=1634226261",
      order: "View detail"
    },
    {
      id: "m3",
      name: "Plant pack for Healthy home office",
      description: "American, raw, meaty",
      price: "PRICE RS-120.99",
      Myimg:
        "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-pack-of-3-good-luck-jade-plants-in-ceramic-pots-16969154297996_220x220.jpg?v=1634225377",
        order: "View detail"
    },
    {
      id: "m4",
      name: "jade plant",
      description: "Healthy...and green...",
      price: "PRICE RS-213",
      Myimg:
        "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
        order: "View detail"
    },
  
    {
      id: "m4",
      name: "Peace Lily",
      description: "Healthy...and green...",
      price: "PRICE  Rs-110",
      Myimg:
        "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
        order: "View detail"
    },
    {
      id: "m5",
      name: "5 Best Fragrant plants",
      description: "Healthy...and green...",
      price: "PRICE Rs-80",
      Myimg:
        "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
        order: "View detail"
    },
  
    {
      id: "m6",
      name: "Plant pack for Healthy home office",
      description: "Healthy...and green...",
      price: "PRICE RS-60",
      Myimg:
        "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
        order: "View detail"
    },
    {
      id: "m7",
      name: "Plant pack for Healthy home office",
      description: "Healthy...and green...",
      price: "PRICE RS-50",
  
      Myimg:
        "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-g-top-4-die-hard-succulents-pack.jpg?v=1635499730",
        order: "View detail"
    },
  ];
  
  const Plant = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
      <div class="w3-margin" >
      <div class="  w3-padding " >
        
        
          <div class="w3-col l3  w3-animate-zoom"  >
            <div >
            
            <img src={meal.Myimg} alt={meal.id} style={{width:"70%"}} />
            
            
            <h3 >{meal.name}</h3>
            <p>{meal.price}</p>
            <p><button class="w3-button w3-black w3-round-xxlarge">
              <Link to={`/Plant/${meal.id}`}>{meal.order}</Link></button></p>
            </div>
          </div>
        </div>
      </div>
    ));
  
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        ></link>
  
        {mealList}
      </div>
    );
  };
  
  export default Plant;
  