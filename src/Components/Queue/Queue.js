import React, { useState, useEffect } from "react";
import Unit from "../Unit"
import "./Queue.css"

import { nanoid } from 'nanoid'



const Queue = ({
    allUnits,
    setAllUnits,
    selected,
    setSelected,
    setEditing,
    lsSave,
    lsName,
    type,
    buildUnit,
    addUnit,
    download,
    deleteUnit,
    upload,
}) => {

const sortByInitiative = (units) => {
    const updatedUnits = units?.map(unit => unit)
    updatedUnits.sort(function(a,b) {
        let keyA = a.initiative;
        let keyB = b.initiative;
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
    })
    updatedUnits.forEach((unit, i) => {
        unit.position = i;
    })
    //setAllUnits(updatedUnits);
    return updatedUnits;
}


const updateUnitArray = (unitArray, position, unit) => {
    // update the unitArray with the passed unit at the passed position
    // save to local storage
    const newItems = []
    unitArray.forEach((x, index) => {
        if (index === position) {
            newItems.push(unit);
        } else {
            newItems.push(x)
        }
    })
    if (type === 'encounter') {
        const sortedUnits = sortByInitiative(newItems);
        setAllUnits(sortedUnits)
        lsSave(lsName, sortedUnits);
    } else {
        setAllUnits(newItems);
        lsSave(lsName, newItems);
    }
}

return (
    <div className="Queue">
        {allUnits?.map(( unit, index ) => {
            return(
                <Unit 
                    key={nanoid()}
                    values={unit}
                    setSelected={setSelected}
                    viewing={selected?.position===index}
                    setEditing={setEditing}
                    updateUnitArray={updateUnitArray}
                    autoSort
                    allUnits={allUnits}
                    type={type}
                    download={download}
                    deleteUnit={deleteUnit}
                />
            )
        })}
        {/* add create new unit button */}
        <div className="createUnit">
            <button
                onClick={() => {
                    const newUnit = buildUnit();
                    addUnit(newUnit);
                }}
            >
                Create New Unit
            </button>
            </div>
        {/* add upload unit button */}
        <div className="uploadUnit">
            <button
                onClick={() => {
                    upload(addUnit);
                }}
            >
                Upload Unit
            </button>
        </div>

    </div>
    )
}


export default Queue;