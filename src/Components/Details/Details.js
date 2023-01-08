import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';
import "./Details.css"

const Details = ({
    data
}) => {

    return (
        <div className="Details">
            {/* <div>{data?.toString()}</div> */}
            {data ? parse(data) : ''}
        </div>
    )
}


export default Details;