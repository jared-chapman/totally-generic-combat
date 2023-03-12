import React, { useState, useEffect } from "react";
import ModBox from "../ModBox";
import "./ValueEdit.css"



const ValueEdit = ({
    property,
    value,
    updateUnitValue,
    position,
    path,
    setEditingSingle,
    showModBox,
}) => {
    const [formValue, setFormValue] = useState(value)

    


    
    const update = () => {
        updateUnitValue(position, path, parseInt(formValue))
        setEditingSingle(false)
    }

    const cancel = () => {
        setEditingSingle(false);
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
                />
                {showModBox && (
                    <ModBox
                        formValue={formValue}
                        setFormValue={setFormValue}
                    />
                )}
                <div className="ConfirmCancelButtons">
                    <i className="fa-solid fa-xmark" onClick={() => cancel()}></i>
                    <i className="fa-solid fa-rotate-left" onClick={() => reset()}></i>
                    <i className="fa-solid fa-check" onClick={() => update()}></i>
                </div>
            </div>
        </div>
    )
}


export default ValueEdit;