import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
import "./Details.css"
import MDEditor from '@uiw/react-md-editor';


const Details = ({
    unitHTML,
    setUnitHTML,
    saveHTML,
}) => {
    const [value, setValue] = useState(unitHTML);
    const [editing, setEditing] = useState(true);

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

    

    // useEffect( () => {
    // }, [unitHTML])


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
                    <div>{unitHTML ? parse(unitHTML.toString()) : ''}</div>
                )}
                {unitHTML ? 
                    <button onClick={()=>toggleEdit()}>{editing ? 'Confirm' : 'Edit'}</button> :
                    ''
                }
         </div>
    )
}


export default Details;