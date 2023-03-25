import React, { useState, useEffect } from "react";
import ValueEdit from "../ValueEdit"


import "./EditableValue.css"


const EditableValue = ({
    unit,
    allUnits,
    property,
    value,
    max,
    updateUnitValue,
    updateUnitArray,
    position,
    path,
    showModBox,
}) => {
    
    const [formValue, setFormValue] = useState(value)
    const [editingSingle, setEditingSingle] = useState(false)

    useEffect(() => {
    }, [formValue])

    const newUpdateUnitValue = (value) => {
        console.log('newUpdateUnitValue')
        const newUnit = {...unit}
        newUnit.right.max = value // this works but needs to be configurable
        console.log({unit, newUnit})
        updateUnitArray(allUnits, position, newUnit)
    }


    return (
        <div 
        className="EditableValue"
        >
            {!editingSingle ? 
                <div onClick={() => setEditingSingle(!editingSingle)}>
                    <div >{property}</div>
                    <div>{value}{max ? ` / ${max}` : null}</div>
                </div>
                :
                <ValueEdit 
                    property={property}
                    value={value}
                    updateUnitValue={updateUnitValue}
                    updateUnitArray={updateUnitArray}
                    newUpdateUnitValue={newUpdateUnitValue}
                    position={position}
                    path={path}
                    setEditingSingle={setEditingSingle}
                    showModBox={showModBox}
                />
            
        }
        </div>
    )
}


export default EditableValue;