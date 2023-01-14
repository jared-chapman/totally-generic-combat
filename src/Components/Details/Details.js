import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
import "./Details.css"
import MDEditor from '@uiw/react-md-editor';
var md = require('markdown-it')();


const Details = ({
    unitHTML,
    setUnitHTML,
    saveHTML,
}) => {
    const [value, setValue] = useState(unitHTML);
    const [editing, setEditing] = useState(false);

    const toggleEdit = () => {
        setEditing(!editing);
        const oldHTML = unitHTML;
        const newHTML = value;
        //setUnitHTML(value);
        saveHTML(value);
        //updateHTML(value);
    }

    

    useEffect( () => {
        // console.log(unitHTML)
        setValue(unitHTML);
    },[unitHTML])

    return (
        <div className="Details">
            {unitHTML ? 
                <button onClick={()=>toggleEdit()}>{editing ? 'Confirm' : 'Edit'}</button> :
                ''
            }
            {editing ? (
                <div className="container">
                        <MDEditor
                            value={value}
                            onChange={setValue}
                            preview={'edit'}
                        />
                        <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
                    </div>
                ) : (
                    <div>{unitHTML ? parse(md.render(unitHTML.toString())) : ''}</div>
                )}
         </div>
    )
}


export default Details;