import React, { useState, useEffect } from "react";
import Unit from "../Unit"
import "./Queue.css"

import { nanoid } from 'nanoid'



const Queue = ({
    encounterUnits,
    setEncounterUnits,
    setSelected,
    selected,
    setEditing,
    updateUnitValue,
    updateUnitArray,
}) => {
const [isSorted, setIsSorted] = useState(false);
const [autoSort, setAutoSort] = useState(true);

useEffect(() => {
    // loop over units to see if they are sorted
    let initiativeValue = encounterUnits?.[0]?.initiative;
    console.log(encounterUnits)
    for (const unit of encounterUnits) {
        console.log({checkVal:unit.initiative, initiativeValue})
        if (unit.initiative > initiativeValue) {
            setIsSorted(false);
            console.log("FAIL")
            // if units are not sorted, sort them
            if (autoSort) {
                    sortByInitiative();
                }
                return;
            } else {
                initiativeValue = unit.initiative
            }
        }
    setIsSorted(true);
}, [encounterUnits])

const sortByInitiative = () => {
    const updatedUnits = encounterUnits?.map(unit => unit)
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
    setEncounterUnits(updatedUnits);
}


const move = (position, direction) => {
    // move unit at {{position}} up or down
    // AKA set it's position value to + or - current
    if (
        (position === 0 && direction === -1) || 
        (position === encounterUnits?.length-1 && direction === 1)) {
            console.log('you cant do that')
            return
        }
    
    const displacedPosition = position+direction


    // update .position of moving unit and the unit it's swapping with
    // as well as the active position if applicible
    let updatedUnits = encounterUnits?.map((unit) => {
        if (unit.position === position) {
            unit.position = displacedPosition;
        } else {
        }
        return unit
    })

    updatedUnits.sort(function(a,b) {
        let keyA = a.position;
        let keyB = b.position;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    })
    setEncounterUnits(updatedUnits)
}

useEffect(() => {
    console.log("encounterUnits changed",encounterUnits)
}, [encounterUnits])



return (
    <div className="Queue">
        {console.log(encounterUnits)}
        {encounterUnits?.map(( unit, index ) => {
            return(
                <Unit 
                    key={nanoid()}
                    inEncounter
                    values={unit}
                    move={move}
                    last={index===encounterUnits?.length-1 ? true : false}
                    setSelected={setSelected}
                    viewing={selected?.position===index}
                    setEditing={setEditing}
                    // updateUnitValue={updateUnitValue}
                    updateUnitArray={updateUnitArray}
                    autoSort={autoSort}
                    allUnits={encounterUnits}
                />
            )
        })}
        <div className="options">
            {!isSorted &&
                <button onClick={() => sortByInitiative()}>Sort By Initiative</button>
            }
        </div>
    </div>
    )
}


export default Queue;