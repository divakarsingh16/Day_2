import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import About from './Components/About';
import Error from './Components/Error';

const AppLayOut = () => (
  <>
    <Header />
    <Outlet/>
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayOut/>,
    errorElement:<Error/>
  },
  {
    path:'/about',
    element:<About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
