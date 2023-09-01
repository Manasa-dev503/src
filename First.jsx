import React from "react";
import Second from "./Second";
function First(props){
    return(
        <div className="box">
            <h1>First</h1>
            <h1>counter::{props.c}</h1>
            <Second c={props.c}></Second>

        </div>
    )
}
export default First;