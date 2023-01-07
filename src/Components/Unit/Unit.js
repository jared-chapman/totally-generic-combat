import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
//import {ItemTypes } from './Constants'
import {useDrag } from 'react-dnd'

import "./Unit.css"

const Unit = ({
    values,
}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "Unit",
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div 
            className="Unit" 
            ref={drag}
            style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
            }}
        >
            <div className="Left">
                <div>{values.leftName}</div>
                <div>{values.leftValue}</div>
            </div>
            <div className="Center">
                <span className="Name">{values.name}</span>
                <div className="CenterOtherValues">
                    {values.otherValues.map((value) => {
                        return(
                            <div key={nanoid()}>
                                <div className="keyValue">
                                    <div> {value.name}:&nbsp; </div>
                                    <div> {value.value} </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="Right">
                <div>{values.rightName}</div>
                <div>{values.rightValue}/{values.rightValueMax}</div>
            </div>
        </div>
    )
}


export default Unit;