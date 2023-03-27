import React, { useState, useEffect } from "react";
import EncounterView from "../EncounterView"
import CreaturesView from "../CreaturesView"
import Details from "../Details"
import Menu from "../Menu"
import Header from "../Header"
import "./Main.css"


import testUnits from "../../testItems"

var ls = require('local-storage');

const lsItems = ls.get('encounter')
const items = lsItems ?? testUnits

const Main = (

) => {
    const [ encounterUnits, setEncounterUnits ] = useState(items); // array of all units/full data
    const [ creatures, setCreatures ] = useState(testUnits);    
    const [ selected, setSelected ] = useState(); // unit/note that is clicked on/full data
    const [ active, setActive] = useState(0); // the position of the unit who's turn it is (red border)
    const [ editing, setEditing ] = useState(false); // whether or not the main editor is open
    const [ view, setView ] = useState('Encounters'); // what is shown in the main view (encounter, notes, etc)

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
        ls.set('encounter', newItems)
    }

    const updateUnitValue = (position, path, value) => {
        // console.log('updateUnitValue')
        console.log(`updateUnitValue`, {position, path, value})
        const encounterUnitsCopy = [...encounterUnits]
        if (path === 'rightMax') {
            encounterUnitsCopy.position['right'].max=value;
        } else {
            if (typeof encounterUnitsCopy[position][path] === 'object') {
                encounterUnitsCopy[position][path].value=value
            } else {
                encounterUnitsCopy[position][path]=value
        }

        }
        setEncounterUnits(encounterUnitsCopy)
    }

    const lsSave = (newItems, lsName='encounter') => {
        ls.set(newItems, lsName)
    }

    const addUnit = (unit) => {
        // add the passed unit to the encounterUnits array
        // save to local storage
        const newUnits = creatures.map(x => x);
        newUnits.push(unit);
        setCreatures(newUnits)
        //ls.set('units', newUnits)
    }

    useEffect(() => {
        // console.log('encounterUnits', encounterUnits)
    }, [encounterUnits])


    return (
        <div>
            <Header/>
            <div className="Main">
                <Menu
                    setView={setView}
                />
                { (view === 'Encounters') && 
                    <EncounterView
                        setSelected={setSelected}
                        encounterUnits={encounterUnits}
                        setEncounterUnits={setEncounterUnits}
                        setEditing={setEditing}
                        active={active}
                        setActive={setActive}
                        selected={selected}
                        updateUnitValue={updateUnitValue}
                        lsSave={lsSave}
                        //updateUnitArray={updateUnitArray}
                    />
                }
                { (view === 'Creatures') &&
                    <CreaturesView  
                        selected={selected}
                        setSelected={setSelected}
                        active={active}
                        setActive={setActive}
                        updateUnitValue={updateUnitValue}
                        setEditing={setEditing}
                        addUnit={addUnit}
                        creatures={creatures}
                        setCreatures={setCreatures}
                        lsSave={lsSave}
                    />
                }

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