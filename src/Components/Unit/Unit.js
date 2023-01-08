import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'




import "./Unit.css"


//ReactDOM.render(element, document.body)

const Unit = ({
    values,
    move,
    active,
    last,
    setSelected,
}) => {
//console.log(values)
    

    return (
        <div 
            className="Unit"
            style={active ? {borderColor: 'red'} : {}}
        >
            <div className="Arrows">
                {values.position !== 0 ? (
                    <i className="fa-solid fa-caret-up" onClick={() => move(values.position, -1)}></i>
                ) : <i></i>}
                
                {!last ? (
                    <i className="fa-solid fa-caret-down" onClick={() => move(values.position, 1)}></i>
                ) : <i></i>}
            </div>
            <div className="Left">
                <div>{values.left.name}</div>
                <div>{values.left.value}{values.left.max ? '/' + values.left.max : ''}</div>
            </div>
            <div className="Center">
                <span className="Name" onClick={() => setSelected(values?.details)}>{values.name}</span>
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
                <div>{values.right.name}</div>
                <div>{values.right.value}{values.right.max ? '/' + values.right.max : ''}</div>
                
            </div>
        </div>
    )
}


export default Unit;