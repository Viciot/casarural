import React from "react";
import './App.css';

import Home from './pages/Home';
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from "./pages/ErrorPage";


import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";


import Navbar from "./components/Navbar";



function App() {
  return (
      <>
        <Navbar />
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms/" element={<Rooms />} />
                <Route path="/rooms/:slug" element={<SingleRoom />} />  
                {/* slug is a cappuccino name */}
                <Route path="*" element={<ErrorPage />} />
        </Routes>
        
      </>
  );
}

export default App;
