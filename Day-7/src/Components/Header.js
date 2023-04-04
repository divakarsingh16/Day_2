import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Title = () => (
  
  <Link to='/'><img
    className="logo"
    alt="logo"
    src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5168794.jpeg"
  />
  </Link>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  function ToggleSwitch() {
    // rest of the component code
  }
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
          <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>{" "}
        {/* <input type="range" className="slider" min="0" max="100" value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} />
         */}
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
