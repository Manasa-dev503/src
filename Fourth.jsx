import React from "react";
import MyContext from "./MyContext";
import { useContext } from "react";
function Fourth(){
    var y = useContext(MyContext);
    return (
        <div className="mybox">
            <h1>Fourth</h1>
            <h1>y::{y}</h1>

        </div>
    )
}
export default Fourth;