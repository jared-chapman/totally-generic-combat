import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
import "./Details.css"
import MDEditor from '@uiw/react-md-editor';
var md = require('markdown-it')();


const Details = ({
    unitHTML,
    setUnitHTML,
    saveHTML,
    editing,
    setEditing,
}) => {
    const [displayValue, setDisplayValue] = useState(unitHTML);

    const toggleEdit = () => {
        setEditing(!editing);
        const oldHTML = unitHTML;
        const newHTML = displayValue;
        //setUnitHTML(value);
        saveHTML(displayValue);
        //updateHTML(value);
    }

    

    useEffect( () => {
        // console.log(unitHTML)
        setDisplayValue(unitHTML);
    },[unitHTML])

    return (
        <div className="Details">
            {(unitHTML && editing) ? 
                <button onClick={()=>toggleEdit()}>Confirm</button> :
                ''
            }
            {editing ? (
                <div className="container">
                        <MDEditor
                            value={displayValue}
                            onChange={setDisplayValue}
                            preview={'edit'}
                        />
                        <MDEditor.Markdown source={displayValue} style={{ whiteSpace: 'pre-wrap' }} />
                    </div>
                ) : (
                    <div>{unitHTML ? parse(md.render(unitHTML.toString())) : ''}</div>
                )}
         </div>
    )
}


export default Details;