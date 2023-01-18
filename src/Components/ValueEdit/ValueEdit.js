import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
import MDEditor from '@uiw/react-md-editor';
import "./ValueEdit.css"
var md = require('markdown-it')();



const ValueEdit = ({
    property,
    value,
    updateUnitValue,
    position,
    path,
    setEditingSingle
}) => {
    const [formValue, setFormValue] = useState(value)

    


    
    const update = () => {
        setEditingSingle(false)
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