import React, { useState, useEffect, Component } from "react";
import parse from 'html-react-parser';
import MDEditor from '@uiw/react-md-editor';
import ValueEdit from "../ValueEdit"


import "./EditableValue.css"
var md = require('markdown-it')();


const EditableValue = ({
    property,
    value,
    max,
    updateUnitValue,
    position,
    path,
}) => {
    
    const [formValue, setFormValue] = useState(value)
    const [editingSingle, setEditingSingle] = useState(false)

    useEffect(() => {
        // console.log(formValue)
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
                />
            
        }
        </div>
    )
}


export default EditableValue;