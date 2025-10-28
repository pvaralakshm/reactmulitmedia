import React from "react";
import Data from "./assets/Data1.json";

export default function Datajson() {
  return (
    <div>
      {Data.products.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h2>{item.brand}</h2>
        </div>
      ))}
    </div>
  );
}

        

        
           
     

