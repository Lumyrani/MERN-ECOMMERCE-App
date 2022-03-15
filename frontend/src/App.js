import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

function App() {
  const [sideToggle,setSideToggle]= useState(false);
  return (
    <main>
      <BrowserRouter>
        <Navbar click={()=>setSideToggle(true)}/>
        <Backdrop show={sideToggle}click={()=>setSideToggle(false)}/>
        <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
