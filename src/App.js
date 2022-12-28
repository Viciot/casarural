import React from "react";
import './App.css';
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import ErrorPage from "./pages/ErrorPage"



function App() {
  return <>
    <Home></Home>
    <Rooms></Rooms>
    <SingleRoom></SingleRoom>
    <ErrorPage></ErrorPage>
  </>;  
}

export default App;
