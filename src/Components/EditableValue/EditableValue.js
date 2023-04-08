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
    title,
}) => {
    
const [editing, setEditing] = useState()


    // const rerender = () => {
    //     console.log('rerender')
    //     setEditing(false)
    //     setEditing(true)
    // }


    return (
        <div 
        className={`EditableValue`}
        >
            <div
                className={`CenteredContent ${title ? 'Title' : ''}`}
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
                    <span onClick={(e) => {
                        // I don't know why I need to persist the event here, but I do.
                        e.persist();
                        setEditing(true)
                        e.stopPropagation();
                    }}>
                        <div>{`${name}: ${value}${max ? ` / ${max}` : ''}`}</div>
                    </span>
                :
                    <div onClick={(e) => {
                        e.persist();
                        setEditing(true)
                        e.stopPropagation();
                    }}>
                        <div >{name}</div>
                        <div>{value}{max ? ` / ${max}` : null}</div>
                    </div>
        }




            </div>
            
        </div>
    )
}


export default EditableValue;