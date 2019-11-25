import React from "react"
function Foote(props){
    return(
        <div className="footer">
{props.item.map(
    el=>(
        <div>
<img src={el.image}></img>
<div><h2>{el.titel}</h2>
{el.description}</div>
        </div>
    

    

    )

)}
        </div>
    )
}
export default Foote