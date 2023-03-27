import React, { useState, useEffect } from "react";
import ModBox from "../ModBox";
import "./ValueEdit.css"



const ValueEdit = ({
    name,
    value,
    setEditing,
    showModBox,
    updateFunction,
    path,
    index,
}) => {
    const [formValue, setFormValue] = useState(value)

    
    const handleBlur = () => {
        cancel();
    };
    
    const update = () => {
        updateFunction(formValue, path, index)
        setEditing(false)
    }

    const cancel = () => {
        setEditing(false);
    }

    const reset = () => {
        setFormValue(value)
    }

    return (
        <div className="PopupContainer">
            <div className = "PopupInputs">
                <div className="PopupProperty">{name}</div>
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