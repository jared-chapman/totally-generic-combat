import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'




import "./Unit.css"
import "../EditableValue"
import EditableValue from "../EditableValue";



//ReactDOM.render(element, document.body)

const Unit = ({
    inEncounter,
    values,
    move,
    //active,
    last,
    setSelected,
    setEditing,
    viewing,
    updateUnitValue,
    autoSort,
    deleteUnit,
    saveUnit,
    allUnits,
    updateUnitArray,
}) => {

    const setSelectedStopEditing = (clickedUnit) => {
        setEditing(false)
        setSelected(clickedUnit)
        // console.log("clickedUnit", clickedUnit)
    }

    useEffect(() => {
        // console.log("viewing", viewing)
    },[viewing])

    const downloadUnitJSON = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(values)], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "unit.json";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }



    return (
        <div className="Unit">
        {!autoSort && inEncounter &&
            <div className="Arrows">
                {values.position !== 0 ? (
                    <i className="fa-solid fa-caret-up" onClick={() => move(values.position, -1)}></i>
                ) : <i></i>}
                
                {!last ? (
                    <i className="fa-solid fa-caret-down" onClick={() => move(values.position, 1)}></i>
                ) : <i></i>}
            </div>
        }
        <div className="Left">
            {inEncounter &&
                <EditableValue
                    property={values.left.name}
                    value={values.left.value}
                    updateUnitValue={updateUnitValue}
                    position={values.position}
                    path={'left'}
                />
            }
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
                    {values.otherValues.map((value) => {
                        return(
                            <div key={nanoid()}>
                                <div className="keyValue">
                                    <div> {value.name}:&nbsp; </div>
                                    <div> {value.value} </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="Right">
                {inEncounter &&
                    <EditableValue
                        property={values.right.name}
                        value={values.right.value}
                        max={values.right.max}
                        updateUnitValue={updateUnitValue}
                        position={values.position}
                        path={'right'}
                        showModBox
                    />
                }
                {!inEncounter &&
                    <EditableValue
                        property={`Max ${values.right.name}`}
                        value={values.right.max}
                        updateUnitValue={updateUnitValue}
                        updateUnitArray={updateUnitArray}
                        position={values.position}
                        path={'rightMax'} 
                        unit={values}
                        allUnits={allUnits}
                    />
                }
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
