import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'




import "./Unit.css"
import "../EditableValue"
import EditableValue from "../EditableValue";




const Unit = ({
    type,
    values,
    setSelected,
    turn,
    setTurn,
    setEditing,
    viewing,
    allUnits,
    updateUnitArray,
    download,
    deleteUnit,
}) => {

    const setSelectedStopEditing = (clickedUnit) => {
        setEditing(false)
        setSelected(clickedUnit)
    }

    const newUpdateUnitValue = (value, path, index=null) => {
        console.log({value, path, index})
        const newUnit = {...values}
        if (index !== null) {
            const newValue = {name: newUnit[path][index].name, value};
            newUnit[path][index] = newValue
        } else {
            newUnit[path] = value
        }
        console.log('newUnit', newUnit)
        updateUnitArray(allUnits, values.position, newUnit)
    }

    // set turn to current unit position
    const setTurnToThisUnit = () => {
        console.log("setTurnToThisUnit", values.position)
        //if (type === 'encounter') {
            setTurn(values.position)
        //}
    }



    return (
        <div 
            className="Unit"                     
            onClick={() => setSelectedStopEditing(values)}
            // if it is this units turn, highlight it
            style={(turn === values.position) ? {'box-shadow': 'rgba(0, 0, 0, 0.23) 0px 3px 6px, rgba(0, 0, 0, 0.55) 0px 3px 6px'} : {} }
        >
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
                    style={(viewing) ? {color: 'purple'} : {} }
                >
                    {values.name}&nbsp;
                </span>
                {/* if not in encounter, show save JSON button */}
                {type === 'Creatures' &&
                    <i className="fa-solid fa-download" onClick={() => download(values)}></i>
                }
                {/* if not in encounter, show delete button */}
                {type === 'Creatures' &&
                    <i className="fa-solid fa-trash" onClick={() => deleteUnit(values.position)}></i>
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
