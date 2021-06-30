import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cats from "./features/CatList";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Cats />
    </div>
  );
}

export default App;
