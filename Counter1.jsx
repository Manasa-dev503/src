import React from "react";
function Counter1(){
    console.log("Counter rendered")
    var [count,setcount] = React.useState(1)
    return (
        <div className="mybox">
            <h1>Welcome to ReactJs</h1>
            <h1>{count}</h1>
            {setcount(222)}
            <button>Increment</button>
            

        </div>
    )
}
export default Counter1;