import React from "react";
import "./styles/Global.css";
import { Routes, Route } from "react-router-dom";
import ProductAdmin from "./Pages/ProductAdmin";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<ProductAdmin />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
