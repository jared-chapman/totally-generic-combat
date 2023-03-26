import React, { useState, useEffect } from "react";
import ValueEdit from "../ValueEdit"


import "./EditableValue.css"


const EditableValue = ({
    unit,
    //allUnits,
    property,
    value,
    max,
    //updateUnitValue,
    //updateUnitArray,
    //position,
    updateFunction,
    newUpdateUnitValue,
    path,
    index,
    showModBox,
    inline
}) => {
    
    const [formValue, setFormValue] = useState(value)
    const [editing, setEditing] = useState(false)
    const [newValue, setNewValue] = useState(null)

    useEffect(() => {
    }, [formValue])

    

    useEffect(() => {
        console.log({value, max, path, index})
    }, [value, max, path])


// useEffect(() => {
//     console.log({newValue})
//     updateFunction(newValue, path)
// }, [newValue])
const updateValue = value => {
    console.log({value})
    updateFunction(value, path, index)
}

    return (
        <div 
        className="EditableValue"
        >
            {editing ? 
                <ValueEdit 
                    property={property}
                    value={value}
                    //updateUnitValue={updateUnitValue}
                    //updateUnitArray={updateUnitArray}
                    newUpdateUnitValue={newUpdateUnitValue}
                    //position={position}
                    //path={path}
                    setEditing={setEditing}
                    showModBox={showModBox}
                    setNewValue={setNewValue}
                    updateValue={updateValue}
                />
                :
                inline ?
                <div onClick={() => setEditing(!editing)}>
                    <div>{`${property}: ${value}${max ? ` / ${max}` : ''}`}</div>
                </div>
                :
                <div onClick={() => setEditing(!editing)}>
                    <div >{property}</div>
                    <div>{value}{max ? ` / ${max}` : null}</div>
                </div>
        }
        </div>
    )
}


export default EditableValue;