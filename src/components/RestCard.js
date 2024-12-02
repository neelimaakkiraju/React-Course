import { IMG_URL } from "../utils/constants";


const RestCard = (props) => {
    const { resData } = props;
   
    const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resData?.info
  
    return (
      <div className="flex flex-col truncate w-[220px] p-4 h-full border rounded-md bg-gray-50 shadow-lg  hover:bg-purple-50 m-2 ">
       
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
  export const withPromotedLabel = (RestCard)=> {
    return (props)=>{
      return(
        <div className="">
          <label className="absolute m-2 bg-slate-600 text-white p-1 text-sm rounded-sm">20% OFF</label>
          <RestCard {...props}/>
        </div>
      )

    }
  }

  export default RestCard;