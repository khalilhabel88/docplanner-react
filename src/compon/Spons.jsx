import React from "react"
function Sponsor (props){
    return (
        <div className="spons">
        <h2 className="titl">We are a globalcompany <br/>with local culture</h2>
            
            
 {props.item.map(
     el =>(
    <div>
        
        <img className="log" src={el.image}></img>
     
        
 </div>
     )
     

 )}
        </div>
    )

  
    
}
export default Sponsor