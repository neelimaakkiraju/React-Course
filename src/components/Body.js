import RestCard from "./RestCard";
import resObj from "../utils/mockData";
import { useState,useEffect } from "react";
import ShimmerComponent from "./Shimmer.js";

const BodyComponent = () => {

  const [resList, setresList] = useState([])

  useEffect(()=>{
    fetchData()

  },[])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    setresList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  if (resList.length===0){
    return <ShimmerComponent />
     
  }
  
    return (
      <div className="body-container">
        <div className="search-bar">
         <button className="search-btn"
         onClick={()=> {
        const filteredList = resList.filter((resta)=> resta.info.avgRating<4);
        setresList(filteredList)
         }}
          >Top Rated Restaurants</button>
        </div>
        <div className="res-body">
          {
            resList.map((res)=> (
              <RestCard key={res.info.id} resData={res}/>
            ))
          }
        </div>
      </div>
    );
  };
  export default BodyComponent