import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useState, useEffect } from "react";
import "../App.css";
import Shimmer from "./shimmer";
const Body = () => {
  const [allRestaurants, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchtext, setSearchText] = useState("");
  const filterData = (searchtext, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
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
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
console.log("rendered")
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchtext}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        onClick={() => {
          const data = filterData(searchtext, allRestaurants);
          console.log(data);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (<h1>No Data Found</h1>) : (filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })
        )}
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
