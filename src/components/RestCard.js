import { IMG_URL } from "../utils/constants";


const RestCard = (props) => {
    const { resData } = props;
   
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData?.info
  
    return (
      <div className="res-container">
        <div>
          <img
            src=
              {IMG_URL +
          cloudinaryImageId}
            
            className="card-img"
          />
          <h3>{name}</h3>
          <p>{cuisines.join(", ")}</p>
          <h5>{avgRating + " Stars"}</h5>
          <h5>{costForTwo}</h5>
          <h5>{sla.slaString}</h5>
        </div>
      </div>
    );
  };
  export default RestCard;