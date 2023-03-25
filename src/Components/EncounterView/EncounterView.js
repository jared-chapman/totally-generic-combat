import react from 'react';import React, { useState, useEffect } from "react";
import Queue from "../Queue"


const EncounterView = ({
    setSelected,
    unitsArray,
    setUnitsArray,
    setEditing,
    active,
    setActive,
    selected,
    updateUnitValue,
}) => {
    
        return (
            <div className="EncounterView">
                <Queue
                    setSelected={setSelected}
                    unitsArray={unitsArray}
                    setUnitsArray={setUnitsArray}
                    setEditing={setEditing}
                    active={active}
                    setActive={setActive}
                    selected={selected}
                    updateUnitValue={updateUnitValue}
                />
            </div>
        )
}

export default EncounterView;