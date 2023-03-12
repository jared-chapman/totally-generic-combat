import React, { useState, useEffect } from "react";
import ValueEdit from "../ValueEdit"


import "./EditableValue.css"


const EditableValue = ({
    property,
    value,
    max,
    updateUnitValue,
    position,
    path,
    showModBox,
}) => {
    
    const [formValue, setFormValue] = useState(value)
    const [editingSingle, setEditingSingle] = useState(false)

    useEffect(() => {
    }, [formValue])


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