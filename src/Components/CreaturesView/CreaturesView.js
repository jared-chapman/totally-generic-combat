import react from 'react';import React, { useState, useEffect } from "react";
import testUnits from "../../testItems"
import Unit from '../Unit';
import { nanoid } from 'nanoid'
var ls = require('local-storage');

const saveUnit = (unit) => {
    const units = ls.get('units');
    const newUnits = units.map(x => x);
    newUnits[unit.position] = unit;
    ls.set('units', newUnits);
}




const CreaturesView = ({
    creatures,
    setCreatures,
    selected,
    setSelected,
    updateUnitValue,
    autoSort,
    setEditing,
    updateUnitArray,
    addUnit,
}) => {


const deleteUnit = (position) => {
    const updatedUnits = creatures.map(unit => unit)
    updatedUnits.splice(position, 1);
    updatedUnits.forEach((unit, i) => {
        unit.position = i;
    })
    setCreatures(updatedUnits);
}

const buildUnit = () => {
    const newUnit = {
        position: creatures.length,
        name: "New Unit",
        left: {
            name: "Initiative",
            value: 0,
        },
        right: {
            name: "HP",
            value: 0,
            max: 10,
        },
        otherValues: [{
            name: "AC",
            value: 0,
        }]
    }
    return newUnit;
}


    return (
        <div className="CreaturesView">
            <div>This is the creatures view</div>
            { creatures?.map((creatureData, index) => {
                return (
                    <Unit 
                    key={nanoid()}
                    values={creatureData}
                    setSelected={setSelected}
                    viewing={selected?.position===index}
                    setEditing={setEditing}
                    updateUnitValue={updateUnitValue}
                    allUnits={creatures}
                    updateUnitArray={updateUnitArray}
                    autoSort={autoSort}
                    deleteUnit={deleteUnit}
                    saveUnit={saveUnit}
                    />
                )
            })}
            {/* show add creature button */}
            <button onClick={() => addUnit(buildUnit())}>Add Unit</button>
        </div>
    )
}

export default CreaturesView;