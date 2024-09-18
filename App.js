import React from "react";
import ReactDOM from "react-dom/client";

const HeadComponent = () => {
  return (
    <div className="head-container">
      <div>
        <img
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>Contact us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  info: {
    id: "12126",
    name: "Subway",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b9c7807f-59bb-4e91-83d4-5048d293f44e_12126.JPG",
    locality: "Langer Houz -Suncity- Bandlaguda",
    areaName: "Langar Houz",
    costForTwo: "₹350 for two",
    cuisines: ["Fast Food", "Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 3.8,
    parentId: "2",
    avgRatingString: "3.8",
    totalRatingsString: "6.5K+",
    sla: {
      deliveryTime: 37,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-09-17 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
          description: "Delivery!",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/city/hyderabad/subway-langer-houz-suncity-bandlaguda-langar-houz-rest12126",
    type: "WEBLINK",
  },
};


const RestCard = (props) => {
  const {resData} = props;
  
  return (
    <div  className="res-container"> 
      <div>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info. cloudinaryImageId} className="card-img" />
      <h1>{resData.info.name}</h1>
      <h5>{resData.info.cuisines.join(", ")}</h5>
      <h5>{resData.info.avgRating}</h5>

    
    </div>
    </div>
  );
};



const BodyComponent = () => {
  
  return (
    <div className="body-container">
      <div className="search-bar">
        <h3>Search Bar</h3>
      </div>
      <div className="res-body">
    
        <RestCard resData={resObj}/>

       
        
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <HeadComponent />
      <BodyComponent  />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
