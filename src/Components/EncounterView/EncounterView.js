import React, { useState, useEffect } from "react";
import Queue from "../Queue"


const EncounterView = ({
    setSelected,
    encounterUnits,
    setEncounterUnits,
    setEditing,
    active,
    setActive,
    selected,
    updateUnitValue,
    updateUnitArray
}) => {
    
    return (
        <div className="EncounterView">
            <div>This is an encounter</div>
            <Queue
                setSelected={setSelected}
                encounterUnits={encounterUnits}
                setEncounterUnits={setEncounterUnits}
                setEditing={setEditing}
                active={active}
                setActive={setActive}
                selected={selected}
                updateUnitValue={updateUnitValue}
                updateUnitArray={updateUnitArray}
            />
        </div>
    )
}

export default EncounterView;