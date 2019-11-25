import React from "react";
function Nav(props) {
    return (
    <div className="nav" >
    
<img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
      alt="Docplanner Group" />
    
      <div>
      <div>
      <ul className="format">
        {props.item.map(el => (
          <li>
            {el.title}
            {el.sousitems &&
            <div className="opening">
                 {el.sousitems.map(y => (
                <div className="dropdown">
                  <span>{y}</span>
                </div>
              ))}
            </div>
             }
          </li>
        ))}
      </ul>
    </div>
      </div>
</div>
    )}






 export default Nav