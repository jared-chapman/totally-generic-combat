import React, { useState, useEffect } from "react";
import Queue from "../Queue"
import Details from "../Details"
import Menu from "../Menu"
import "./Main.css"

const Main = ({

}) => {
    const [ data, setData ] = useState('');

    return (
        <div className="Main">
            <Queue 
                setData={setData}
            />
            <Details 
                data={data}
            />
            <Menu

            />
        </div>
    )
}


export default Main;