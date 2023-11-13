import React from "react";
import '../styles/style.css'
import avtar from '../assets/img_avatar.png'
function Card(props)  {

  return (
      
      
      
      <div className="card">
        <img className="card_img" src={avtar} alt={avtar} />
        
        <div className="container">
          <h4><b>{props.name}</b></h4> 
          <p>{props.jobTitle}</p> 
          <button id="toggle">Read More</button>
        </div>
      </div>
  );
  
  
};

export default Card;