import React, { useState, useEffect } from "react";
import Unit from "../Unit"
import "./Queue.css"

import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Queue = ({
    unitsArray,
    setUnitsArray,
    setSelected,
    setSelectedPosition,
    saveHTML,
    editing,
    setEditing,
}) => {
    const [ active, setActive] = useState(0);




    const move = (position, direction) => {
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

        // console.log(updatedUnits);
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
                    setSelectedPosition={setSelectedPosition}
                    saveHTML={saveHTML}
                    editing={editing}
                    setEditing={setEditing}
                />
                )
            })}
            <div className="ForwardPrevious">
                <i className="fa-solid fa-backward" onClick={() => changePosition(-1)}></i>
                <i className="fa-solid fa-forward" onClick={() => changePosition(1)}></i>
            </div>
        </div>
    )
}


export default Queue;