import React from "react";
import Third from "./Third";
function Second(props){
    return (
        <div className="mybox">
            <h1>Second</h1>
            <h1>counter::{props.c}</h1>
            <Third></Third>

        </div>
    )
}
export default Second;