import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { useDrop } from 'react-dnd';

const DropPosition = ({
    position,
}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'Unit',
        drop: () => console.log("HEYO", position),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    }), [])
    return(
        <div 
            ref={drop}
            style={{
                opacity: isOver ? 1 : 0.5,
                color: isOver? 'yellow' : 'white', 
                }}
        > 
            this will be a single line
        </div>
    )
}

export default DropPosition;