import React, { useState, useEffect } from "react";
import Unit from "../Unit"
import DropPosition from "../DropPosition"
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

]

const Queue = ({

}) => {
    const [ name, setName ] = useState("");
    const [ Units, setUnits ] = useState(testItems);

    useEffect(() => {
        // initial mount
        setUnits(testItems);
    }, [])

    return (
        <div className="Queue">
            {Units.map(( unit, index ) => {
                return(
                    <div>
                        <Unit 
                            key={nanoid()}
                            values={unit}
                        />
                        <DropPosition 
                            position={index}
                        />
                    </div>
                
                )
            })}
            
        </div>
    )
}


export default Queue;