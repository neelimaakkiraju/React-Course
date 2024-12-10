import { useState, useEffect } from "react";
import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {

  const [showIndex , setShowIndex] = useState(null)
  
  const {id} = useParams()
  const resData = useResMenu(id)
  
  console.log(id)
  
   
  if (resData === null) return <ShimmerComponent />;


  const { name, cuisines, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);
  console.log(resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)


  const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> 
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log(categories)

  return (
    <div className="text-center grid mx-auto gap-8">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
      <div className="grid mx-auto gap-4 w-1/2">
      {
      categories.map((category , index) => (<ResCategory data={category?.card?.card} 
      showItems={index=== showIndex ? true : false}
      setShowIndex={()=>setShowIndex(index)}/>)
         
      )
     }
      </div>
    
      
    </div>
  );
};

export default ResMenu;
