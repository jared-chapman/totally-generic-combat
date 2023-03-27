import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'




import "./Unit.css"
import "../EditableValue"
import EditableValue from "../EditableValue";




const Unit = ({
    inEncounter,
    values,
    setSelected,
    setEditing,
    viewing,
    deleteUnit,
    saveUnit,
    allUnits,
    updateUnitArray,
}) => {

    const thisUnit = values;

    const setSelectedStopEditing = (clickedUnit) => {
        setEditing(false)
        setSelected(clickedUnit)
    }


    const downloadUnitJSON = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(values)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "unit.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    const newUpdateUnitValue = (value, path, index=null) => {
        console.log({value, path, index})
        const newUnit = {...thisUnit}
        if (index !== null) {
            const newValue = {name: newUnit[path][index].name, value};
            newUnit[path][index] = newValue
        } else {
            newUnit[path] = value
        }
        console.log('newUnit', newUnit)
        updateUnitArray(allUnits, thisUnit.position, newUnit)
    }


    return (
        <div className="Unit">
        <div className="Left">
                <EditableValue
                    name={'Initiative'}
                    value={values.initiative}
                    path={'initiative'}
                    index={null}
                    updateFunction={newUpdateUnitValue}
                />
        </div>
        <div className="Center">
            <div className="NameAndEdit">
                <span 
                    className="Name" 
                    onClick={() => setSelectedStopEditing(values)}
                    style={(viewing) ? {color: 'purple'} : {} }
                >
                    {values.name}&nbsp;
                </span>
                {/* if not in encounter, show save JSON button */}
                {!inEncounter &&
                    <i className="fa-solid fa-download" onClick={() => downloadUnitJSON()}></i>
                }
                {/* if not in encounter, show delete button */}
                {!inEncounter &&
                    <i className="fa-solid fa-trash" onClick={() => deleteUnit(values.position)}></i>
                }
                {/* if not in encounter, show save button */}
                {!inEncounter &&
                    <i className="fa-solid fa-save" onClick={() => saveUnit(values)}></i>
                }
                
            </div>
                <div className="CenterOtherValues">
                    {values.otherValues.map((value, index) => {
                        return(
                            <div key={nanoid()}>
                                <EditableValue
                                    name={value.name}
                                    value={value.value}
                                    path={'otherValues'}
                                    index={index}
                                    inline
                                    updateFunction={newUpdateUnitValue}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="Right">
                {/* {inEncounter && */}
                    {/* <EditableValue
                        name={values.right.name}
                        value={values.right.value}
                        max={values.right.max}
                        updateUnitValue={updateUnitValue}
                        updateUnitArray={updateUnitArray}
                        position={values.position}
                        showModBox
                        updateFunction={newUpdateUnitValue}

                    /> */}
                {/* } */}
                {/* {!inEncounter &&
                    <EditableValue
                        name={`Max ${values.right.name}`}
                        value={values.right.max}
                        updateUnitValue={updateUnitValue}
                        updateUnitArray={updateUnitArray}
                        position={values.position}
                        path={'rightMax'} 
                        unit={values}
                        allUnits={allUnits}
                        updateFunction={newUpdateUnitValue}

                    />
                } */}
            </div>
        {/* <ValueEdit
            property={"Name"}
            value={"Warrior"}
            setValue={setValue}
            /> */}
        </div>
    )
}


export default Unit;
