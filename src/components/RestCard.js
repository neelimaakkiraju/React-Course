import { IMG_URL } from "../utils/constants";


const RestCard = (props) => {
    const { resData } = props;
   
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData?.info
  
    return (
      <div className="flex flex-col bg-red-300 truncate w-[220px] p-4 h-full">
       
          <img
            src=
              {IMG_URL +
          cloudinaryImageId}
            
            className="w-[200px] h-[250px] self-center"
          />
          <h3>{name}</h3>
          <p className="text-wrap">{cuisines.join(", ")}</p>
          <h5>{avgRating + " Stars"}</h5>
          <h5>{costForTwo}</h5>
          <h5>{sla.slaString}</h5>
        </div>
     
    );
  };
  export default RestCard;