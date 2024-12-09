import { IMG_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div className="text-start text-[15px] p-3 border-b-[1px] border-gray-200 mx-3 flex justify-between">
            <div className="m-3 text-md font-bold text-gray-600 space-y-4">
              <span>{item.card.info.name} - ₹</span>
              <span>
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-[13px] font-light">
                {item.card.info.description}
              </p>
            </div>
            <div>
              <img
                src={IMG_URL + item.card.info.imageId}
                className="w-32 h-32 rounded-md"
              />

              <div className="bg-white border border-gray-300 rounded-md  px-3 font-semibold text-center">
                <button>ADD +</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
