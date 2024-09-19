import RestCard from "./RestCard";
import resObj from "../utils/mockData";

const BodyComponent = () => {
    return (
      <div className="body-container">
        <div className="search-bar">
          <h3>Search Bar</h3>
        </div>
        <div className="res-body">
          {
            resObj.map((res) => (
              <RestCard key={res.info.id} resData= {res}/>
            ))
          }
        </div>
      </div>
    );
  };
  export default BodyComponent