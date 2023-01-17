import React, { useState, useEffect, Component } from "react";
import parse from 'html-react-parser';
import MDEditor from '@uiw/react-md-editor';
import ValueEdit from "../ValueEdit"


import "./EditableValue.css"
var md = require('markdown-it')();


const EditableValue = ({
    property,
    value,
}) => {
    const [formValue, setFormValue] = useState(value)
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        console.log(formValue)
    }, [formValue])

    const openEdit = () => {
        setEditing(true)
    }




    return (
        <div 
        className="EditableValue"
        onClick={() => openEdit()}
        >
            {!editing ? 
                <div>
                    <div>{property}</div>
                    <div>{value}</div>
                </div>
                :
                <ValueEdit 
                    property={property}
                    value={value}
                    setValue={setValue}
                />
            
        }
        </div>
    )
}


export default EditableValue;