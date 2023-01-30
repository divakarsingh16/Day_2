const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://tmlogosave.s3.ap-south-1.amazonaws.com/5168794.jpeg"
  />
);
const Header = () => (
  <div className="header">
    <Title />

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
