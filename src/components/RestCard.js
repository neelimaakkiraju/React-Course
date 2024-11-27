import { IMG_URL } from "../utils/constants";


const RestCard = (props) => {
    const { resData } = props;
   
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData?.info
  
    return (
      <div className="flex flex-col truncate w-[220px] p-4 h-full border rounded-md bg-gray-50 shadow-lg  hover:bg-purple-50 m-2  transform transition-transform duration-300 hover:scale-105">
       
          <img
            src=
              {IMG_URL +
          cloudinaryImageId}
            
            className="w-[200px] h-[250px] self-center my-2"
          />
          <h3 className="text-wrap font-semibold text-lg">{name}</h3>
          <p className="text-wrap text-sm  text-gray-500">{cuisines.join(", ")}</p>
          <h5 className="text-sm  text-gray-500">{avgRating + " Stars"}</h5>
          <h5 className="text-sm  text-gray-500">{costForTwo}</h5>
          <h5 className="text-sm  text-gray-500">{sla.slaString}</h5>
        </div>
     
    );
  };
  export default RestCard;