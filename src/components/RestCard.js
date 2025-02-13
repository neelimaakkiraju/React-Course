import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
import { useContext, useState } from "react";

const RestCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
// console.log(resData)
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex flex-col truncate w-[220px]  rounded-md justify-center p-2  hover:bg-gray-100 hover:border-[#e9f5db] gap-4 shadow-lg">
      <div className="relative ">
        <label className="absolute my-2 px-4 py-2 bg-black bg-opacity-50 border-[0.5px] border-white text-white text-sm font-semibold rounded-br-xl">
          20% OFF
        </label>
        <img
          src={IMG_URL + cloudinaryImageId}
          className="rounded-lg min-h-[300px] max-h-[300px] object-cover self-center"
        />
        <div className="absolute w-full bottom-0 bg-black bg-opacity-50 rounded-b-lg">
          <h5 className="capitalize font-semibold text-lg tracking-wide text-white text-center">
            {costForTwo}
          </h5>
        </div>
      </div>

      <div className="flex flex-col gap-1 text-sm text-wrap text-gray-500 h-[160px]">
        <h3 className="text-lg font-semibold tracking-tight text-black truncate">
          {name}
        </h3>
        <div className="flex gap-2 text-gray-800">
          <h5 className="flex gap-1 items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              strokecolor="rgba(2, 6, 12, 0.92)"
              fillcolor="rgba(2, 6, 12, 0.92)"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
              ></circle>
              <path
                d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="StoreRating20_svg__paint0_linear_32982_71567"
                  x1="10"
                  y1="1"
                  x2="10"
                  y2="19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#21973B"></stop>
                  <stop offset="1" stopColor="#128540"></stop>
                </linearGradient>
              </defs>
            </svg>
            {avgRating + " Stars"}
          </h5>

          <h5 className="capitalize"> * {sla.slaString}</h5>
        </div>

        <p className="text-sm tracking-tight py-2">{cuisines.join(", ")}</p>
        {/* <p>username:{loggedInUser}</p> */}
      </div>
    </div>
  );
};
export const withPromotedLabel = (RestCard) => {
  return (props) => {
    return (
      <div className="">
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
