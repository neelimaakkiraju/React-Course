import { useState, useEffect } from "react";
import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";

const ResMenu = () => {
  const [resData, setResData] = useState(null);

  const {id} = useParams()
  console.log(id)
  
   useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
     API_URL + id
    );
    const json = await data.json();

    console.log(json);
    setResData(json.data);
  };
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
