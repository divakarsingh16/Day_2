import { IMG_URL_CDN } from "../constant";
import "../App.css";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => (
  <div className="card">
    <img src={IMG_URL_CDN + cloudinaryImageId} />
    <h2>{name}</h2> <h3>{cuisines.join(", ")}</h3>
    <h4>{lastMileTravelString} Distance</h4>
  </div>
);

export default RestaurantCard;
