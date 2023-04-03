import React, { useState, useEffect } from "react";
import EncounterView from "../EncounterView"
import CreaturesView from "../CreaturesView"
import Menu from "../Menu"
import Header from "../Header"
import "./Main.css"


import testUnits from "../../testItems"

var ls = require('local-storage');

//const lsItems = ls.get('encounter')
// set local storage values if they don't exist
    if (!ls.get('encounter')) {
        ls.set('encounter', testUnits)
    }
    if (!ls.get('creatures')) {
        ls.set('creatures', testUnits)
    }
    if (!ls.get('items')) {
        ls.set([], 'items')
    }

const Main = (

) => {


    const [ view, setView ] = useState('Encounters'); // what is shown in the main view (encounter, notes, etc)

  
    const lsSave = (newItems, lsName='Encounters') => {
        ls.set(newItems, lsName)
    }

    // prompt user to upload a JSON file and return the contents
    const upload = (setter) => {
        // setter is a function that's passed in to handle the returned data
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.onchange = e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = readerEvent => {
                const content = readerEvent.target.result;
                const parsedContent = JSON.parse(content);
                setter(parsedContent)
                //return parsedContent
            }
        }
        input.click();
    }

    // download the passed in value as a JSON file
    const download = (value) => {
        console.log('downloading', value)
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(value));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", "encounter.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    

    return (
        <div>
            <Header/>
            <div className="Main">
                <Menu
                    setView={setView}
                />
                { (view === 'Encounters') && 
                    <EncounterView
                        lsSave={lsSave}
                        lsName={'encounter'}
                        type={'Encounters'}
                        upload={upload}
                        download={download}
                    />
                }
                { (view === 'Creatures') &&
                    <CreaturesView
                        lsSave={lsSave}
                        lsName={'creatures'}
                        type={'Creatures'}
                        upload={upload}
                        download={download}
                    />
                }              
            </div>
        </div>
    )
}


export default Main;