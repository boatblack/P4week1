// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import ItemList from "../components/ItemList";
import NewCollection from "../components/NewCollection";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <header className="header">
        <h1>Welcome to Volmaan Sol</h1>
        <p>Your Fashion Destination</p>
      </header>
      <NewCollection />
      <ItemList />
    </div>
  );
};

export default Home;
