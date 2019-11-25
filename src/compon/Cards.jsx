import React from "react";

const Cards = ({ title, description, country, image, classes }) => {
  return (
    <div className={classes}>
      <h1 className="descri"> {title} </h1>
      <h2 className="descri">{description}</h2>
      {country && (
        <select>
          {country.map(el => (
            <option>{el}</option>
          ))}
        </select>
      )}
      <img alt="#" src={image}></img>
    </div>
  );
};

export default Cards;
