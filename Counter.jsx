import React from "react";
function Counter(props){
    //state
    var [count,setcount] = React.useState(props.s)
    //logic
    function inc(){
        setcount(count+props.i)
    }
    function dec(){
        setcount(count-props.i)
    }
    //Template  [component is a reusable state,logic and template]
    return (
        <div className="mybox">
            <h1>Counter:{count}</h1>
            <button onClick={inc}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Counter;