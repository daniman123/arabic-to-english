import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
