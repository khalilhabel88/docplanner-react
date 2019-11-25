import React from "react";
function Midel(props) {
  return (
    <div className="atribute">
      <div>
        <h1 className="titl">
          The world's <br />
          biggest healthcare platform
        </h1>
        <p>
          We work from 6 offices all over the world, bringing Docplanner
          <br /> Group to life inalmost 20 countries
        </p>
        <img src="https://www.docplanner.com/img/sygnet.svg"></img>
      </div>
      <div className="pic">
        {props.item.map(el => (
          <div className="rough">
            <img src={el.image}></img>
            <h1 className="titl">{el.title}</h1>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Midel;
