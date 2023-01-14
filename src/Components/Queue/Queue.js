import React, { useState, useEffect } from "react";
import Unit from "../Unit"
import "./Queue.css"

import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Queue = ({
    unitHTML,
    unitsArray,
    setUnitHTML,
    selected,
    setSelected,
    selectedPosition,
    setSelectedPosition,
}) => {
    const [ units, setUnits ] = useState();
    const [ active, setActive] = useState(0);
    

    useEffect(() => {
        setUnits(unitsArray);
        // console.log(unitHTML)
    },[unitsArray, unitHTML])

    useEffect(() => {
        // when selected is updated, update unitHTML of Main component
        setUnitHTML(selected)
        setSelectedPosition(selectedPosition)
    }, [selected, selectedPosition])

    //console.log(units)

    const move = (position, direction) => {
        if (
            (position === 0 && direction === -1) || 
            (position === units.length-1 && direction === 1)) {
                console.log('you cant do that')
                return
            }
        
        const displacedPosition = position+direction
        // update .position of moving unit and the unit it's swapping with
        // as well as the active position if applicible
        let updatedUnits = units.map((unit) => {
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
        setUnits(updatedUnits)
    }

    const changePosition = (direction) => {
        let newActive = active+direction;
        if (newActive > units.length-1) {
            newActive=0;
        }
        if (newActive < 0) {
            newActive = units.length-1
        }
        setActive(newActive);
    }


    return (
        <div className="Queue">
            {units?.map(( unit, index ) => {
                return(
                <Unit 
                    key={nanoid()}
                    values={unit}
                    move={move}
                    active={index===active ? true : false}
                    last={index===units.length-1 ? true : false}
                    setSelected={setSelected}
                    selectedPosition={selectedPosition}
                    setSelectedPosition={setSelectedPosition}
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