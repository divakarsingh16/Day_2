import React from "react";
import ReactDOM from "react-dom/client";
import youtube from "./assets/youtube.svg";
import './App.css'
const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="container" id="conatainer">
      <img className="logo" src={youtube} />
      <input className="search-bar" type="search"/>
    </div>
  );
};

const App=()=>{
   return <Header/>
}
root.render(<App/>);
