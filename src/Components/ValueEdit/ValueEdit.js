import React, { useState, useEffect } from "react";
import ModBox from "../ModBox";
import "./ValueEdit.css"



const ValueEdit = ({
    property,
    value,
    updateUnitValue,
    newUpdateUnitValue,
    position,
    path,
    setEditing,
    showModBox,
    setNewValue,
    updateValue
}) => {
    const [formValue, setFormValue] = useState(value)

    
    const handleBlur = () => {
        console.log('blur')
        cancel();
    };

    
    const update = () => {
        //updateUnitValue(position, path, parseInt(formValue))
        //newUpdateUnitValue(parseInt(formValue))
        //setNewValue(path)
        updateValue(formValue)
        setEditing(false)
    }

    const cancel = () => {
        console.log('cancel')
        setEditing(false);
    }

    const reset = () => {
        setFormValue(value)
    }

    return (
        <div className="PopupContainer">
            <div className = "PopupInputs">
                <div className="PopupProperty">{property}</div>
                <input
                    className="PopupValue"
                    name='formValue'
                    type='text'
                    onChange={e => setFormValue(e.target.value)}
                    value={formValue}
                    placeholder={value}
                    onBlur={handleBlur}
                    autoFocus
                />
                {showModBox && (
                    <ModBox
                        formValue={formValue}
                        setFormValue={setFormValue}
                        
                    />
                )}
                <div className="ConfirmCancelButtons">
                    {/* onMouseDown doesn't compete with onBlur like onClick does  */}
                    <i className="fa-solid fa-xmark" onMouseDown={() => cancel()}></i> 
                    <i className="fa-solid fa-rotate-left" onMouseDown={() => reset()}></i>
                    <i className="fa-solid fa-check" onMouseDown={() => update()}></i>
                </div>
            </div>
        </div>
    )
}


export default ValueEdit;