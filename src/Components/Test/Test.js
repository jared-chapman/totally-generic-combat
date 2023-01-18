import React, { useState, useEffect, Component } from "react";






const Test = ({
    
}) => {
    const [ midiValues, setMidiValues ] = useState([]);
    const [ midiMessage, setMidiMessage ] = useState();

    useEffect(() => {
        // enable midi on mount
        navigator.requestMIDIAccess()
        .then(onMIDISuccess, onMIDIFailure);
    }, [])

    useEffect(() => {
        // when  midi message is received, update midiValues in state
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

    const getValueFromMidi = (CC, min, max) => {
        const midiIndex = midiValues?.findIndex(obj => obj?.CC == CC);
        if (midiIndex === -1) {
            console.log("min")
            return min;
        }
        const input = (midiValues[midiIndex]?.value / 127) ?? 0;
    
        const output = lerp(min, max, input)
        return parseInt(output);
    
    }
    
    
    const lerp = (start, end, amt) => {
        return (1-amt)*start+amt*end
    }

    const onMIDISuccess = (midiAccess) => {
        var inputs = midiAccess.inputs;
        for (var input of midiAccess.inputs.values())
            input.onmidimessage = getMIDIMessage;
    }

    const onMIDIFailure = () => {
        console.log('Could not access your MIDI devices.');
    }

    const getMIDIMessage = (midiMessage) => {
        const data = {
            'CC': midiMessage?.data[1],
            'value': midiMessage?.data[2],
        }
        setMidiMessage(data)
    }

    const r = getValueFromMidi(18, 0, 255);
    const g = getValueFromMidi(19, 0, 255);
    const b = getValueFromMidi(16, 0, 255);
    const a = getValueFromMidi(17, 127, 255);
    const top = getValueFromMidi(74, 100, 0);
    const left = getValueFromMidi(71, 0, 100);
    const padding = getValueFromMidi(76, 5, 40);

    const testStyle = {
        'color': 'white',
        'background-color': `rgba(${r}, ${g}, ${b}, ${a})`,
        'position': 'absolute',
        'top': `${top}%`, 
        'left': `${left}%`,
        // 'padding': '30px',
        padding
    }


    return (
        <div 
        className="Test"
        style={testStyle}
        >
            😎
        </div>
    )
}


export default Test;