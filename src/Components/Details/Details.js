import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
var md = require('markdown-it')();
import "./Details.css"
import MDEditor from '@uiw/react-md-editor';


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
        setUnitHTML(newHTML);

        saveHTML(newHTML);
        //updateHTML(value);
    }

    

    useEffect( () => {
        // console.log(unitHTML)
        setValue(unitHTML);
    },[unitHTML])

    return (
        <div>
            {editing ? (
                <div className="container">
                        <MDEditor
                            value={value}
                            onChange={setValue}
                        />
                        <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
                    </div>
                ) : (
                    <div>{unitHTML ? parse(md.render(unitHTML.toString())) : ''}</div>
                )}
                {unitHTML ? 
                    <button onClick={()=>toggleEdit()}>{editing ? 'Confirm' : 'Edit'}</button> :
                    ''
                }
         </div>
    )
}


export default Details;