import React, { useState, useEffect } from "react";
import ValueEdit from "../ValueEdit"


import "./EditableValue.css"


const EditableValue = ({
    name,
    value,
    max,
    updateFunction,
    newUpdateUnitValue,
    showModBox,
    inline,
    path,
    index,
}) => {
    
const [editing, setEditing] = useState(false)


    return (
        <div 
        className="EditableValue"
        >
            {editing ? 
                <ValueEdit 
                    name={name}
                    value={value}
                    newUpdateUnitValue={newUpdateUnitValue}
                    setEditing={setEditing}
                    showModBox={showModBox}
                    updateFunction={updateFunction}
                    path={path}
                    index={index}
                />
            :
                inline ?
                    <div onClick={() => setEditing(!editing)}>
                        <div>{`${name}: ${value}${max ? ` / ${max}` : ''}`}</div>
                    </div>
                :
                    <div onClick={() => setEditing(!editing)}>
                        <div >{name}</div>
                        <div>{value}{max ? ` / ${max}` : null}</div>
                    </div>
        }
        </div>
    )
}


export default EditableValue;