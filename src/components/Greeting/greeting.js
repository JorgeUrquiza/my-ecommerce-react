import React from "react";
import "./greeting.css"

const Greeting = ( {description}) => {
    return (
        <div className="Greeting">
            <h3> {description} </h3>
        </div>
    );
};

export default Greeting;