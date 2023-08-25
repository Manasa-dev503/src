import React from "react";
function Counter(){
    //state
    var [count,setcount] = React.useState(0)
    //logic
    function inc(){
        setcount(count+1)
    }
    function dec(){
        setcount(count-1)
    }
    //Template  component is a reusable state,logic and template
    return (
        <div className="mybox">
            <h1>Counter:{count}</h1>
            <button onClick={inc}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Counter;