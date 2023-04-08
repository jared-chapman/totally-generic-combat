import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'




import "./Unit.css"
import "../EditableValue"
import EditableValue from "../EditableValue";




const Unit = ({
    type,
    values,
    selected,
    setSelected,
    turn,
    setTurn,
    setEditing,
    //viewing,
    allUnits,
    updateUnitArray,
    download,
    deleteUnit,
}) => {

    const [viewing, setViewing] = useState(false);

    const setSelectedStopEditing = (clickedUnit) => {
        setEditing(false)
        setSelected(clickedUnit)
    }

    const newUpdateUnitValue = (value, path, index=null) => {
        // parseInt is necessary to sort by initiative
        // will need workaround for CR since it can be a fraction
        if (!isNaN(parseInt(value))) {
            value = parseInt(value)
        }
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

    // show turn and viewing when they change
    useEffect(() => {
        console.log('selected', selected)
    }, [selected])




    return (
        <div 
            className={`Unit ${selected === values.position ? 'Selected' : ''}`}
            onClick={() => setSelectedStopEditing(values)}
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
                <EditableValue
                    
                    value={values.name}
                    path={'name'}
                    index={null}
                    updateFunction={newUpdateUnitValue}
                    title
                />
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
