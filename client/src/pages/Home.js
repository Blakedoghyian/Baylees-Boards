import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';
import background from '../assets/home-page.gif';

const Home = () => {
  return (
    <div
      class="jumbotron jumbotron-fluid"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        height: "100vh"
      }}
    >
      <div class="container">
        <h1 class="">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  );
};

export default Home;
