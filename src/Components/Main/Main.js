import React, { useState, useEffect } from "react";
import Queue from "../Queue"
import Details from "../Details"
import Menu from "../Menu"
import "./Main.css"

import testItems from "../../testItems"

var ls = require('local-storage');

const lsItems = ls.get('units')
console.log(lsItems)
const items = lsItems ?? testItems


const Main = (

) => {
    const [ unitsArray, setUnitsArray ] = useState(items); // array of all units/full data
    const [ selected, setSelected ] = useState(); // unit/note that is clicked on/full data
    const [ active, setActive] = useState(0); // the position of the unit who's turn it is (red border)
    const [ editing, setEditing ] = useState(false); // whether or not the main editor is open


    const saveHTML = (newHTML) => {
        // update the unitsArray value with the passed data for the selected unit
        // save to local storage
        const newItem = unitsArray.find(x => x.position===selected?.position)
        newItem.details = newHTML


        const newItems = []
        unitsArray.forEach((x, index) => {
            if (index === selected?.position) {
                newItems.push(newItem);
            } else {
                newItems.push(x)
            }
        })
        setUnitsArray(newItems)
        ls.set('units', newItems)
    }


    return (
        <div className="Main">
            <Menu

            />
            <Queue 
                setSelected={setSelected}
                unitsArray={unitsArray}
                setUnitsArray={setUnitsArray}
                setEditing={setEditing}
                active={active}
                setActive={setActive}
                selected={selected}
            />
            <Details 
                saveHTML={saveHTML}
                editing={editing}
                setEditing={setEditing}
                selected={selected}
                name={unitsArray[selected?.position]?.name}
                active={active}
            />
        </div>
    )
}


export default Main;