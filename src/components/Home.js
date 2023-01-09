import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return(
  <div id="home">
    <h1 style={{color: "firebrick"}}>Diana is a Web Developer from Wakanda</h1>
    <div id="home">
      <h1>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  </div>);
}

export default Home;
