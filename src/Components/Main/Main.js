import React, { useState, useEffect } from "react";
import EncounterView from "../EncounterView"
import Details from "../Details"
import Menu from "../Menu"
import Header from "../Header"
import "./Main.css"


import testUnits from "../../testItems"

var ls = require('local-storage');

const lsItems = ls.get('units')
console.log(lsItems)
const items = lsItems ?? testUnits

const Main = (

) => {
    const [ encounterUnits, setEncounterUnits ] = useState(items); // array of all units/full data
    const [ selected, setSelected ] = useState(); // unit/note that is clicked on/full data
    const [ active, setActive] = useState(0); // the position of the unit who's turn it is (red border)
    const [ editing, setEditing ] = useState(false); // whether or not the main editor is open

    const saveHTML = (newHTML) => {
        // update the encounterUnits value with the passed data for the selected unit
        // save to local storageonClick
        const newItem = encounterUnits.find(x => x.position===selected?.position)
        newItem.details = newHTML


    const newItems = []
        encounterUnits.forEach((x, index) => {
            if (index === selected?.position) {
                newItems.push(newItem);
            } else {
                newItems.push(x)
            }
        })
        setEncounterUnits(newItems)
        ls.set('units', newItems)
    }

    const updateUnitValue = (position, path, value) => {
        const encounterUnitsCopy = [...encounterUnits]
        if (typeof encounterUnitsCopy[position][path] === 'object') {
            encounterUnitsCopy[position][path].value=value
        } else {
            encounterUnitsCopy[position][path]=value

        }
        setEncounterUnits(encounterUnitsCopy)
    }

    const setValue = (x) => {
        console.log("Saved", x)
    }

    return (
        <div>
            <Header/>
            <div className="Main">
                <Menu
                />
                <EncounterView
                    setSelected={setSelected}
                    encounterUnits={encounterUnits}
                    setEncounterUnits={setEncounterUnits}
                    setEditing={setEditing}
                    active={active}
                    setActive={setActive}
                    selected={selected}
                    updateUnitValue={updateUnitValue}
                />

                <Details 
                    saveHTML={saveHTML}
                    editing={editing}
                    setEditing={setEditing}
                    selected={selected}
                    name={encounterUnits[selected?.position]?.name}
                    active={active}
                />
            </div>
        </div>
    )
}


export default Main;