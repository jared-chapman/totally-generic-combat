import React, { useState, useEffect } from "react";
import "./Menu.css"


const Menu = ({
    setView
}) => {
    const [ data, setData ] = useState([{label: 'Encounters'}, {label: 'Creatures'}, {label: 'Items'}]);

    return (
        <div className="Menu">
            {(data &&
                data.map(x => {
                    return(
                        <div onClick={() => setView(x.label)}>{x.label}</div>
                    )
                })
            )}
        </div>
    )
}


export default Menu;