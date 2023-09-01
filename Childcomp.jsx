import React from "react";
function Childcomp(){
    console.log("HI Child rendered")
    return (
        <div>
            <h1 className="box">Child Component</h1>
        </div>

    )
}
export default React.memo(Childcomp);