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


const Main = ({

}) => {
    const [ unitsArray, setUnitsArray ] = useState(items);
    const [ unitHTML, setUnitHTML ] = useState();
    const [ selected, setSelected ] = useState();
    const [ selectedPosition, setSelectedPosition ] = useState(0);
    const [ editing, setEditing ] = useState(false);
    const [ displayValue, setDisplayValue ] = useState();


    useEffect (() => {
    }, [unitHTML])

    useEffect (() => {

    }, [selected])
    
    useEffect (() => {
    }, [selectedPosition])

    useEffect (() => {
    }, [])


    const saveHTML = (newHTML) => {
        const newItem = unitsArray.find(x => x.position===selectedPosition)
        newItem.details = newHTML


        const newItems = []
        unitsArray.forEach((x, index) => {
            if (index === selectedPosition) {
                newItems.push(newItem);
            } else {
                newItems.push(x)
            }
        })
        setUnitsArray(newItems)
        setUnitHTML(newHTML);
        ls.set('units', newItems)
    }


    return (
        <div className="Main">
            <Queue 
                selected={selected}
                setSelected={setSelected}
                selectedPosition={selectedPosition}
                setSelectedPosition={setSelectedPosition}
                unitHTML={unitHTML}
                setUnitHTML={setUnitHTML}
                unitsArray={unitsArray}
                setUnitsArray={setUnitsArray}
                editing={editing}
                setEditing={setEditing}
                saveHTML={saveHTML}
            />
            <Details 
                unitHTML={unitHTML}
                setUnitHTML={setUnitHTML}
                saveHTML={saveHTML}
                editing={editing}
                setEditing={setEditing}
                displayValue={displayValue}
                setDisplayValue={setDisplayValue}
            />
            <Menu

            />
        </div>
    )
}


export default Main;