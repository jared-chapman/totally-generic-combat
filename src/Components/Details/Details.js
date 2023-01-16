import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
import "./Details.css"
import MDEditor from '@uiw/react-md-editor';
var md = require('markdown-it')();


const Details = ({
    saveHTML,
    editing,
    setEditing,
    name,
    selected,
    active,
}) => {
    const [displayValue, setDisplayValue] = useState(selected);



    const startEditing = () => {
        setEditing(true);
    }

    const stopEditing = () => {
        setEditing(false)
        setDisplayValue(selected?.details);
        saveHTML(displayValue);
    }

    

    useEffect( () => {
        setDisplayValue(selected?.details);
    },[selected, editing, active])

    const update = (x) => {
        setDisplayValue(x);
    }

    return (
        <div className="Details">
            <div className="DisplayHeader">
                <div></div>
                <div className="DisplayTitle">{name ? name : ''}</div>
                {name ?
                    !editing ? 
                        <i className="fa-solid fa-pen-to-square" onClick={() => startEditing()}></i> :
                        <i className="fa-solid fa-check" onClick={() => stopEditing()}></i>
                        :
                        ''
                }
            </div>
            {editing ? (
                <div className="container">
                    <MDEditor
                        value={displayValue}
                        onChange={update}
                        preview={'edit'}
                    />
                    <MDEditor.Markdown source={displayValue} style={{ whiteSpace: 'pre-wrap' }} />
                </div>
                ) : (
                <div>{displayValue ? parse(md.render(displayValue.toString())) : ''}</div>
                )}
         </div>
    )
}


export default Details;