import RestCard from "./RestCard";
import resObj from "../utils/mockData";
import { useState,useEffect } from "react";

const BodyComponent = () => {

  const [resList, setresList] = useState()

  useEffect(()=>{
    fetchData()

  },[])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    setresList(json.data.cards)
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