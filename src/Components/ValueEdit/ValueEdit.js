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

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            update();
        }
        if (e.key === "Escape") {
            cancel();
        }
    }

    const handleFocus = (e) => {
        console.log(e)
        e.target.select();
    }

    // select text on mount
    useEffect(() => {
        const input = document.querySelector(".PopupValue")
        input.select();
    }, [])
    



    return (
        <div className="PopupContainer">
            <div className = "PopupInputs">
                <div className="PopupProperty">{name}</div>
                <input
                    className="PopupValue"
                    name='formValue'
                    type='text'
                    onChange={e => setFormValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={formValue}
                    placeholder={value}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    autoComplete="off"
                />
                {showModBox && (
                    <ModBox
                        formValue={formValue}
                        setFormValue={setFormValue}
                        
                    />
                )}
                <div className="ConfirmCancelButtons">
                    {/* onMouseDown doesn't compete with onBlur like onClick does  */}
                    <i className="fa-solid fa-xmark grow" onMouseDown={() => cancel()}></i> 
                    <i className="fa-solid fa-rotate-left grow" onMouseDown={() => reset()}></i>
                    <i className="fa-solid fa-check grow" onMouseDown={() => update()}></i>
                </div>
            </div>
        </div>
    )
}


export default ValueEdit;