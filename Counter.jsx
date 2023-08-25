import React from "react";
function Counter(){
    //state
    //logic
    //Template  component is a reusable state,logic and template
    var [count,setcount] = React.useState(0)
    return (
        <div className="mybox">
            <h1>Counter:{count}</h1>
        </div>
    )
}
export default Counter;