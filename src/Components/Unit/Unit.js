import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'




import "./Unit.css"
import "../EditableValue"
import EditableValue from "../EditableValue";


//ReactDOM.render(element, document.body)

const Unit = ({
    values,
    move,
    active,
    last,
    setSelected,
    setEditing,
    viewing,
    updateUnitValue
}) => {

    const setSelectedStopEditing = (clickedUnit) => {
        setEditing(false)
        setSelected(clickedUnit)
        // console.log("clickedUnit", clickedUnit)
    }

    useEffect(() => {
        console.log("viewing", viewing)
    },[viewing])

  


    return (
        <div 
            className="Unit"
            style={active ? {borderColor: 'red'} : {}  }
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
                {/* <div>{values.left.name}</div>
                <div>{values.left.value}{values.left.max ? '/' + values.left.max : ''}</div> */}
                <EditableValue
                    property={values.left.name}
                    value={values.left.value}
                    updateUnitValue={updateUnitValue}
                    position={values.position}
                    path={'left.value'}
                />
                            </div>
            <div className="Center">
                <div className="NameAndEdit">
                    <span 
                        className="Name" 
                        onClick={() => setSelectedStopEditing(values)}
                        style={(viewing) ? {color: 'purple'} : {} }
                    >
                        {values.name}&nbsp;
                    </span>
                </div>
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
            {/* <ValueEdit
                property={"Name"}
                value={"Warrior"}
                setValue={setValue}
             /> */}
        </div>
    )
}


export default Unit;