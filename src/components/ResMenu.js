import { useState, useEffect } from "react";
import ShimmerComponent from "./Shimmer";

const ResMenu = () => {
  const [resData, setResData] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=405798&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setResData(json.data)
  };

  return resData === 'null'?<ShimmerComponent/> :(
    <div>
      <h1>{resData?.cards[2]?.card?.card?.info?.name}</h1>
      <h2>Menu</h2>
    </div>
  );
};

export default ResMenu;
