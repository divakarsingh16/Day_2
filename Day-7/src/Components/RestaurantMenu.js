import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL_CDN } from "../constant";
import Shimmer from "./shimmer";
import "../App.css";

const RestaurantMenu = () => {
  const params = useParams();
  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4586853&lng=78.38848879999999&restaurantId=${params.nested}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json);
    console.log(json);
    console.log(restaurant?.data?.cards?.[0]?.card?.card?.info?.name);
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant Id : {params.nested}</h1>
        <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2>
        <img
          src={
            IMG_URL_CDN +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt={params.nested}
        />

        <h3>
          {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}
        </h3>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city.avgRating}</h3>
        {console.log(Object.values(restaurant?.data?.cards[2]))}
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (each) => (
              <li key={each?.card?.info?.id}>{each?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
