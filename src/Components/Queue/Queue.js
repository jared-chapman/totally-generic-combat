import React, { useState, useEffect } from "react";
import Unit from "../Unit"
import "./Queue.css"

import { nanoid } from 'nanoid'



const Queue = ({
    unitsArray,
    setUnitsArray,
    setSelected,
    selected,
    setEditing,
    active,
    setActive,
    updateUnitValue,
}) => {
const [isSorted, setIsSorted] = useState(false);
const [autoSort, setAutoSort] = useState(true);

useEffect(() => {
    // loop over units to see if they are sorted
    let initiativeValue = unitsArray?.[0].left.value;
    console.log(unitsArray)
    for (const unit of unitsArray) {
        console.log({checkVal:unit.left.value, initiativeValue})
        if (unit.left.value > initiativeValue) {
            setIsSorted(false);
            console.log("FAIL")
            // if units are not sorted, sort them
            if (autoSort) {
                    sortByInitiative();
                }
                return;
            } else {
                initiativeValue = unit.left.value
            }
        }
    setIsSorted(true);
}, [unitsArray])

const sortByInitiative = () => {
    const updatedUnits = unitsArray.map(unit => unit)
    updatedUnits.sort(function(a,b) {
        let keyA = a.left.value;
        let keyB = b.left.value;
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
    })
    updatedUnits.forEach((unit, i) => {
        unit.position = i;
    })
    setUnitsArray(updatedUnits);
}


const move = (position, direction) => {
    // move unit at {{position}} up or down
    // AKA set it's position value to + or - current
    if (
        (position === 0 && direction === -1) || 
        (position === unitsArray?.length-1 && direction === 1)) {
            console.log('you cant do that')
            return
        }
    
    const displacedPosition = position+direction
    if (displacedPosition === active) {
        setActive(position)
    }


    // update .position of moving unit and the unit it's swapping with
    // as well as the active position if applicible
    let updatedUnits = unitsArray.map((unit) => {
        if (unit.position === position) {
            if (unit.position === active) {
                setActive(active + direction);
            }
            unit.position = displacedPosition;
        } else {
            if (unit.position === displacedPosition) {
                unit.position = position
            }
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
    setUnitsArray(updatedUnits)
}

const changePosition = (direction) => {
    let newActive = active+direction;
    if (newActive > unitsArray.length-1) {
        newActive=0;
    }
    if (newActive < 0) {
        newActive = unitsArray.length-1
    }
    setActive(newActive);
}


return (
    <div className="Queue">
        {unitsArray?.map(( unit, index ) => {
            return(
                <Unit 
                    key={nanoid()}
                    values={unit}
                    move={move}
                    active={index===active ? true : false}
                    last={index===unitsArray?.length-1 ? true : false}
                    setSelected={setSelected}
                    viewing={selected?.position===index}
                    setEditing={setEditing}
                    updateUnitValue={updateUnitValue}
                    autoSort={autoSort}
                />
            )
        })}
        <div className="ForwardPrevious">
            <i className="fa-solid fa-backward" onClick={() => changePosition(-1)}></i>
            <i className="fa-solid fa-forward" onClick={() => changePosition(1)}></i>
        </div>
        <div className="options">
            {!isSorted &&
                <button onClick={() => sortByInitiative()}>Sort By Initiative</button>
            }
        </div>
    </div>
    )
}


export default Queue;