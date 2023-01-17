import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
import MDEditor from '@uiw/react-md-editor';
var md = require('markdown-it')();

import "./ValueEdit.css"


const ValueEdit = ({
    property,
    value,
    setValue,
    updateUnitValue,
    position,
    path
}) => {
    const [formValue, setFormValue] = useState(value)

    useEffect(() => {
        console.log(formValue)
    }, [formValue])

    
    const update = () +> {
        setValue(formValue)
        console.log("initial call")
        updateUnitValue(position, path, formValue)
    }

    return (
        <div className="PopupContainer">
            <div className="PopupProperty">{property}</div>
            <input
                className="PopupValue"
                name='formValue'
                type='text'
                onChange={e => setFormValue(e.target.value)}
                placeholder={value}
                />
            <i className="fa-solid fa-floppy-disk" onClick={() => update()}></i>
        </div>
    )
}


export default ValueEdit;