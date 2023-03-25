import React, { useState, useEffect } from "react";


const MidiControl = (
) => {
    const [ encounterUnits, setEncounterUnits ] = useState(items); // array of all units/full data
    const [ selected, setSelected ] = useState(); // unit/note that is clicked on/full data
    const [ active, setActive] = useState(0); // the position of the unit who's turn it is (red border)
    const [ editing, setEditing ] = useState(false); // whether or not the main editor is open
    const [ midiValues, setMidiValues ] = useState([]);
    const [ midiMessage, setMidiMessage ] = useState();

    


    useEffect(() => {
        navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);
    }, [])

    function onMIDISuccess(midiAccess) {

        var inputs = midiAccess.inputs;

        for (var input of midiAccess.inputs.values())
            input.onmidimessage = getMIDIMessage;
    }

    function onMIDIFailure() {
        console.log('Could not access your MIDI devices.');
    }

    
    useEffect(() => {
        const data = midiMessage
        // console.log(data)
        let allValues = [...midiValues]

        if (!midiValues.filter(x => x?.CC === data?.CC).length > 0) {
            allValues.push(data) 
            setMidiValues(allValues)
        } else {
            const objIndex = allValues.findIndex((obj => obj?.CC == data?.CC));
            allValues[objIndex]=data
            setMidiValues(allValues)
        } 
    },[midiMessage]);

    









    const saveHTML = (newHTML) => {
        // update the encounterUnits value with the passed data for the selected unit
        // save to local storage
        const newItem = encounterUnits.find(x => x.position===selected?.position)
        newItem.details = newHTML


        const newItems = []
        encounterUnits.forEach((x, index) => {
            if (index === selected?.position) {
                newItems.push(newItem);
            } else {
                newItems.push(x)
            }
        })
        setEncounterUnits(newItems)
        ls.set('units', newItems)
    }

    const updateUnitValue = (position, path, value) => {
        const encounterUnitsCopy = [...encounterUnits]
        if (typeof encounterUnitsCopy[position][path] === 'object') {
            encounterUnitsCopy[position][path].value=value
        } else {
            encounterUnitsCopy[position][path]=value

        }
        setEncounterUnits(encounterUnitsCopy)
    }

    const setValue = (x) => {
        console.log("Saved", x)
    }

    return (
        <Test 
            getValueFromMidi={getValueFromMidi}
        />
    )
}


export default MidiControl;