
import React from "react";
import loader from "../assets/loading.gif";

 function Preloader() {
  return (
    <div>
      <img src={loader} style={{ borderRadius:"30px"}}/>
    </div>
  );
}

export default Preloader;