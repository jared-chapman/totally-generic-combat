import React, { useState, useEffect } from "react";
import Queue from "../Queue"
import "./Main.css"

const Main = ({

}) => {
    const [name, setName] = useState("");

    return (
        <div className="Main">
            <Queue />
            <div> rest of the page </div>
        </div>
    )
}


export default Main;