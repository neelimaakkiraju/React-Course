import { useState, useEffect } from "react";
import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  
  const {id} = useParams()
  const resData = useResMenu(id)
  
  console.log(id)
  
   
  if (resData === null) return <ShimmerComponent />;


  const { name, cuisines, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>

      <h1>Recommended</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}-{'Rs.'}{item.card.info.defaultPrice / 100||item.card.info.price /100}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
