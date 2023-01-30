import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useState, useEffect } from "react";
import "../App.css";
const Body = () => {
  const [restaurants, setRestaurant] = useState(restaurantList);
  const [searchtext, setSearchText] = useState("");
  const filterData = (searchtext, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchtext)
    );
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4434646&lng=78.3771953&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards)
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        onClick={() => {
          const data = filterData(searchtext, restaurants);
          console.log(data);
          setRestaurant(data);
        }}
      >
        Search
      </button>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        {/* <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[2].data} />
      <RestaurantCard {...restaurantList[3].data} />
      <RestaurantCard {...restaurantList[4].data} />
      <RestaurantCard {...restaurantList[5].data} />
      <RestaurantCard {...restaurantList[6].data} /> */}
      </div>
    </div>
  );
};

export default Body;
