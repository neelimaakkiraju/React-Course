import RestCard , {withPromotedLabel} from "./RestCard";
import resObj from "../utils/mockData";
import { useState,useEffect } from "react";
import ShimmerComponent from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { withPromotedLabel } from "./RestCard.js";

const BodyComponent = () => {

  const [resList, setresList] = useState([])

  const [updatedSerch, setUpdatedSearch] = useState([])

  const [searchText, setSearchText]= useState("")
  
  const onlineStatus = useOnlineStatus()

  const IsPromoted = withPromotedLabel(RestCard)
 
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
    if (onlineStatus === false){
      return <h1>You're offline,please check your internet connection</h1>
    }
    return (resList.length===0)? <ShimmerComponent /> : (
      <div className="body-container ">
        <div>
        <div className="flex gap-3 m-3 ">
            <input  className="border border-black rounded-md px-2 text-sm w-72" type="text" placeholder="Search for food and restaurants"  value={searchText} onChange={(e)=>{setSearchText(e.target.value)
}}></input>
            <button className="border border-black px-3  rounded-md hover:bg-purple-50 text-sm py-1" onClick={()=> {
              const updatedList = resList.filter((resta)=> resta.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setUpdatedSearch(updatedList)
              
            }}>Search</button>
             <button className="border border-black px-3 rounded-md hover:bg-purple-50 text-sm"
         onClick={()=> {
        const filteredList = resList.filter((resta)=> resta.info.avgRating>4.5);
        setUpdatedSearch(filteredList)
         }}
          >Top Rated Restaurants</button>

            
          </div>
        
          
        </div>
        <div className="flex flex-wrap gap-4">
          {
            updatedSerch.map((res)=> (
              <Link
              key={res.info.id} 
              to={"/restaurant/" + res.info.id}>
                {
                  res.info.veg ? (<IsPromoted resData={res}/>): ( <RestCard resData={res}/>)
                  
                }
                
               </Link>
            ))
          }
        </div>
      </div>
    );
  };
  export default BodyComponent