import React, { useState, useEffect } from "react";
import "./ModBox.css";



const ModBox = ({
    formValue,
    setFormValue
}) => {
    const [modValue, setModValue] = useState(0);

    const increment = (x) => {
        const target = modValue + x;
        if (target >= 0){
            setModValue(target);
        }
    }

    const updateFormValue = (modifier) => {
        setFormValue(formValue + modifier)
    }


    return (
        <div className="ModBox">
            <i class="fa-solid fa-hand-holding-heart" 
                onClick={(() => updateFormValue(modValue))}
            ></i>
            <div className="MiddleRow">
                <i className="fa-solid fa-minus UpdateButton" onClick={() => increment(-1)}></i>
                <input
                    className="ModInput"
                    name='modValue'
                    type='text'
                    onChange={e => setModValue(e.target.value)}
                    placeholder={modValue}
                />
                <i className="fa-solid fa-plus UpdateButton" onClick={() => increment(+1)}></i>
            </div>
            <i class="fa-solid fa-skull-crossbones" 
                onClick={(() => updateFormValue(-modValue))}
            ></i>
        </div>
    )
}


export default ModBox;