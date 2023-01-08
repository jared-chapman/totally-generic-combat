import React, { useState, useEffect } from "react";
import Unit from "../Unit"
import "./Queue.css"

import { nanoid } from 'nanoid'

const testItems = [
    {
        position: 0,
        name: "Warrior",
        leftName: 'Initiative',
        leftValue: 14,
        rightName: 'HP',
        rightValue: 22,
        rightValueMax: 22,
        otherValues: [
            {
                name: 'HP',
                value: 22
            },
            {
                name: 'AC',
                value: 16,
            },
            {
                name: 'Spell Save DC',
                value: '14'
            }
        ]
    },{
        position: 1,
        name: "Goblin",
        leftName: 'Initiative',
        leftValue: 8,
        rightName: 'HP',
        rightValue: 9,
        rightValueMax: 12,
        otherValues: [
            {
                name: 'HP',
                value: 14,
            },
            {
                name: 'AC',
                value: '12',
            },
            {
                name: 'CR',
                value: '1/4'
            },
            {
                name: 'STR',
                value: '8',
            },
            {
                name: 'DEX',
                value: '12',
            },
            {
                name: 'WIS',
                value: '8',
            },
            {
                name: 'INT',
                value: '7',
            },
            
        ]
    },
    {
        position: 2,
        name: "Goblin Leader",
        leftName: 'Initiative',
        leftValue: 10,
        rightName: 'HP',
        rightValue: 17,
        rightValueMax: 17,
        otherValues: [
            {
                name: 'HP',
                value: 17,
            },
            {
                name: 'AC',
                value: '14',
            },
            {
                name: 'CR',
                value: '1'
            },
            {
                name: 'STR',
                value: '10',
            },
            {
                name: 'DEX',
                value: '13',
            },
            {
                name: 'WIS',
                value: '10',
            },
            {
                name: 'INT',
                value: '7',
            },
            
        ]
    },

]

const Queue = ({

}) => {
    const [ units, setUnits ] = useState(testItems);
    const [ active, setActive] = useState(0);

    useEffect(() => {
        // initial mount
        setUnits(testItems);
    },[])

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

        console.log(updatedUnits);
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
            <span onClick={() => changePosition(-1)}>Back</span>
            <span onClick={() => changePosition(1)}>Forward</span>
            {units.map(( unit, index ) => {
                return(
                <Unit 
                    key={nanoid()}
                    values={unit}
                    move={move}
                    active={index===active ? true : false}
                />
                )
            })}
        </div>
    )
}


export default Queue;