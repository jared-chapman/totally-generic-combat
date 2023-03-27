import React, { useState, useEffect } from "react";
import Queue from "../Queue"
import Details from "../Details"
import testUnits from "../../testItems"

var ls = require('local-storage');

// if (!ls.get('encounter')) {
//     ls.set('encounter', testUnits)
// }

const CreaturesView = ({
    lsSave,
    lsName,
    type,
    upload,
    download,
}) => {
    const [ allUnits, setAllUnits ] = useState(ls.get(lsName)); // array of all units/full data
    const [ editing, setEditing ] = useState(false); // whether or not the main details editor is open
    const [ selected, setSelected ] = useState(); // unit/note that is clicked on/full data
    const [ active, setActive] = useState(0); // the position of the unit who's turn it is (red border)


    const saveHTML = (newHTML) => {
        // update the encounterUnits value with the passed data for the selected unit
        // save to local storage onClick
        const newItem = allUnits.find(x => x.position===selected?.position)
        newItem.details = newHTML


        const newItems = []
            allUnits.forEach((x, index) => {
                if (index === selected?.position) {
                    newItems.push(newItem);
                } else {
                    newItems.push(x)
                }
            })
            setAllUnits(newItems)
            lsSave(lsName, newItems);
    }

    const deleteUnit = (position) => {
        const updatedUnits = allUnits?.map(unit => unit)
        updatedUnits.splice(position, 1);
        updatedUnits.forEach((unit, i) => {
            unit.position = i;
        })
        setAllUnits(updatedUnits);
    }

    const buildUnit = () => {
        const newUnit = {
            position: allUnits.length,
            name: "New Unit",
            initiative: 0,
            hp: 0,
            maxHP: 0,
            otherValues: [{
                name: "AC",
                value: 0,
            }]
        }
        console.log('built unit', newUnit)
        return newUnit;
    }

    

    const addUnit = (unit) => {
        console.log('adding', unit)
        // add the passed unit to the encounterUnits array
        // save to local storage
        const newUnits = allUnits.map(x => x);
        newUnits.push(unit);
        setAllUnits(newUnits);
        lsSave(lsName, newUnits);
    }



    
    return (
        <div>
            <div className="CreaturesView">
                <div>{type}</div>
                <Queue
                    allUnits={allUnits}
                    setAllUnits={setAllUnits}
                    selected={selected}
                    setSelected={setSelected}
                    setEditing={setEditing}
                    active={active}
                    setActive={setActive}
                    lsSave={lsSave}
                    lsName={lsName}
                    type={type}
                    download={download}
                    upload={upload}
                    addUnit={addUnit}
                    buildUnit={buildUnit}
                    deleteUnit={deleteUnit}
                />
            </div>
            <Details 
                    saveHTML={saveHTML}
                    editing={editing}
                    setEditing={setEditing}
                    selected={selected}
                    name={allUnits?.[selected?.position]?.name}
                    active={active}
                />
        </div>
    )
}

export default CreaturesView;