import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch()

  const handleAddBtn = (item)=>{

       dispatch(addItem(item))
       console.log(item)

  }
   



  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div className="text-start text-[15px] p-3 border-b-[1px] border-gray-200 mx-3 flex justify-between">
            <div className="m-3 text-md font-bold text-gray-600 space-y-4 w-9/12">
              <span>{item.card.info.name} - ₹</span>
              <span>
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
             
                <p className="text-[13px] font-light text-wrap">
                  {item.card.info.description}
                </p>
              
            </div>
            <div className="">
              <img
                src={IMG_URL + item.card.info.imageId}
                className="w-32 h-32 mx-auto rounded-md border border-gray-200"
              />

              <div className="bg-white border border-black rounded-md  font-semibold text-center">
                <button onClick={()=>handleAddBtn(item)}>ADD +</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
