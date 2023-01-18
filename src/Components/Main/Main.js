import React, { useState, useEffect } from "react";
import Queue from "../Queue"
import Details from "../Details"
import Menu from "../Menu"
import ValueEdit from "../ValueEdit"
import Test from "../Test"
import "./Main.css"


import testUnits from "../../testItems"

var ls = require('local-storage');

const lsItems = ls.get('units')
console.log(lsItems)
const items = lsItems ?? testUnits

const Main = (

) => {
    const [ unitsArray, setUnitsArray ] = useState(items); // array of all units/full data
    const [ selected, setSelected ] = useState(); // unit/note that is clicked on/full data
    const [ active, setActive] = useState(0); // the position of the unit who's turn it is (red border)
    const [ editing, setEditing ] = useState(false); // whether or not the main editor is open
    


    // const getValueFromMidi = (CC, min, max) => {
    //     const midiIndex = midiValues.findIndex(obj => obj?.CC == CC);
    //     if (!midiValues[midiIndex]) {
    //         return min;
    //     }
    //     const input = (midiValues[midiIndex].value / 127) ?? 0;
    //     const output = lerp(min, max, input)
    //     return parseInt(output);
    // }


    // function lerp (start, end, amt){
    //     return (1-amt)*start+amt*end
    //     }



    // function onMIDISuccess(midiAccess) {
    //     var inputs = midiAccess.inputs;
    //     for (var input of midiAccess.inputs.values())
    //         input.onmidimessage = getMIDIMessage;
    // }
    // function onMIDIFailure() {
    //     console.log('Could not access your MIDI devices.');
    // }

    
    

    // function getMIDIMessage(midiMessage) {
    //     const data = {
    //         'CC': midiMessage?.data[1],
    //         'value': midiMessage?.data[2],
    //     }
    //     setMidiMessage(data)
    // }









    const saveHTML = (newHTML) => {
        // update the unitsArray value with the passed data for the selected unit
        // save to local storage
        const newItem = unitsArray.find(x => x.position===selected?.position)
        newItem.details = newHTML


        const newItems = []
        unitsArray.forEach((x, index) => {
            if (index === selected?.position) {
                newItems.push(newItem);
            } else {
                newItems.push(x)
            }
        })
        setUnitsArray(newItems)
        ls.set('units', newItems)
    }

    const updateUnitValue = (position, path, value) => {
        const unitsArrayCopy = [...unitsArray]
        if (typeof unitsArrayCopy[position][path] === 'object') {
            unitsArrayCopy[position][path].value=value
        } else {
            unitsArrayCopy[position][path]=value

        }
        setUnitsArray(unitsArrayCopy)
    }

    const setValue = (x) => {
        console.log("Saved", x)
    }

    return (
        <div className="Main">
            <Test 
            />
            <Menu
            />
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
            <Details 
                saveHTML={saveHTML}
                editing={editing}
                setEditing={setEditing}
                selected={selected}
                name={unitsArray[selected?.position]?.name}
                active={active}
            />
            

        </div>
    )
}


export default Main;