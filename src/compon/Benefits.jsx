import React from "react";
import Cards from "./Cards";
function Helps(props) {
  return (
    <div className="card">
      {props.item.map(el => (
        <Cards
          title={el.title}
          description={el.description}
          country={el.country}
          image={el.image}
          classes={el.class}
        />
      ))}
    </div>
  );
}
export default Helps;
