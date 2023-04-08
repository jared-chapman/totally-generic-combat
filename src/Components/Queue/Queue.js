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

const [turn, setTurn] = useState(1);

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
    if (type === 'Encounters') {
        const sortedUnits = sortByInitiative(newItems);
        setAllUnits(sortedUnits)
        lsSave(lsName, sortedUnits);
    } else {
        setAllUnits(newItems);
        lsSave(lsName, newItems);
    }
}

const changeTurn = (direction) => {
    if (direction === 'forward') {
        if (turn < allUnits.length - 1) {
            setTurn(turn + 1)
        } else {
            setTurn(0)
        }
    } else if (direction === 'back') {
        if (turn > 0) {
            setTurn(turn - 1)
        } else {
            setTurn(allUnits.length - 1)
        }

    }
};


return (
    <div className="Queue">
        {allUnits?.map(( unit, index ) => {
            return(
                <Unit 
                    key={nanoid()}
                    values={unit}
                    setSelected={setSelected}
                    // viewing={selected?.position===index}
                    selected={selected?.position}
                    setEditing={setEditing}
                    updateUnitArray={updateUnitArray}
                    autoSort
                    allUnits={allUnits}
                    type={type}
                    download={download}
                    deleteUnit={deleteUnit}
                    turn={turn}
                    setTurn={setTurn}
                />
            )
        })}
        {/* create turn forward and back buttons */}
        <div className="turnButtons">
            <button onClick={() => changeTurn('back')}>Previous Unit</button>
            <button onClick={() => changeTurn('forward')}>Next Unit</button>
        </div>

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