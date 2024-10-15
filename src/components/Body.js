import RestCard from "./RestCard";
import resObj from "../utils/mockData";
import { useState,useEffect } from "react";
import ShimmerComponent from "./Shimmer.js";

const BodyComponent = () => {

  const [resList, setresList] = useState([])

  const [updatedSerch, setUpdatedSearch] = useState([])

  const [searchText, setSearchText]= useState("")

  useEffect(()=>{
    fetchData()

  },[])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
    setresList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setUpdatedSearch(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
    return (resList.length===0)? <ShimmerComponent /> : (
      <div className="body-container">
        <div className="search-bar">
        <div className="search-btn">
            <input type="text"  value={searchText} onChange={(e)=>{setSearchText(e.target.value)
}}></input>
            <button onClick={()=> {
              const updatedList = resList.filter((resta)=> resta.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setUpdatedSearch(updatedList)
            }}>Search</button>
            
          </div>
         <button className="search-btn"
         onClick={()=> {
        const filteredList = resList.filter((resta)=> resta.info.avgRating>4.5);
        setresList(filteredList)
         }}
          >Top Rated Restaurants</button>

          
        </div>
        <div className="res-body">
          {
            updatedSerch.map((res)=> (
              <RestCard key={res.info.id} resData={res}/>
            ))
          }
        </div>
      </div>
    );
  };
  export default BodyComponent