import RestCard from "./RestCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {

  const [resList, setresList] = useState(resObj)
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