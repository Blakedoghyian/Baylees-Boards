import React from "react";
import background from '../assets/home-page.gif';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="container-fluid" id="home">
      <div class="jumbotron text-white jumbotron-image shadow d-flex align-items-center" style={{backgroundImage: "url(" + background + ")"}}>
        <div class="container text-center" id="home-text">
          <h1 class="mb-4">charcuterie (pronounced "shahr-ku-tuh-ree"):</h1>
          <h4 class="mb-4">the art of preparing and assembling cured meats and meat products.</h4>
          <Link to={'/boards'}><button class="home-button" type="button">View All Boards</button></Link>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
