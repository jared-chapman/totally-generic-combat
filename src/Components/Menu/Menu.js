import React, { useState, useEffect } from "react";
import "./Menu.css"


const Menu = ({
}) => {
    const [ data, setData ] = useState([{label: "Encounters"}, {label: "Creatures"}, {label: "Items"}]);

    return (
        <div className="Menu">
            {(data &&
                data.map(x => {
                    return(
                        <div>{x.label}</div>
                    )
                })
            )}
        </div>
    )
}


export default Menu;