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
    lsSave,
}) => {

const [isSorted, setIsSorted] = useState(false);
const [autoSort, setAutoSort] = useState(true);

useEffect(() => {
    // loop over units to see if they are sorted
    let initiativeValue = encounterUnits?.[0]?.initiative;
    for (const unit of encounterUnits) {
        if (unit.initiative > initiativeValue) {
            setIsSorted(false);
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
    console.log({newItems})
    setEncounterUnits(newItems)
    //ls.set('units', newItems)
    lsSave('encounter', newItems);
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

// useEffect(() => {
//     console.log("encounterUnits changed",encounterUnits)
// }, [encounterUnits])



return (
    <div className="Queue">
        {encounterUnits?.map(( unit, index ) => {
            return(
                <Unit 
                    key={nanoid()}
                    values={unit}
                    setSelected={setSelected}
                    last={index===encounterUnits?.length-1 ? true : false}
                    viewing={selected?.position===index}
                    setEditing={setEditing}
                    updateUnitArray={updateUnitArray}
                    autoSort={autoSort}
                    allUnits={encounterUnits}
                    inEncounter
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