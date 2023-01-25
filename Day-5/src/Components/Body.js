import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";
import { useState } from "react";
import "../App.css";
const Body = () => {
  const [restaurants, setRestaurant] = useState(restaurantList);
  const [searchtext, setSearchText] = useState("");
  const filterData = (searchtext, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchtext)
    );
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
          console.log(data)
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
