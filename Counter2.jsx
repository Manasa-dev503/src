import React from "react";
import Todolist1 from "./Todolist1";
function Counter2(){
    console.log("first line rendered")
    var [x,setx] = React.useState(1)
    function inc(){
        {console.log("counter rendered")}
        setx(222)
        
        
        
        

    }
    return (
        
        <div className="box">
            <h1>Welcome to React</h1>
            <h1>{x}</h1>
            <button onClick={inc}>increment</button>
            <Todolist1></Todolist1>

            
        </div>
        
    )

}
export default Counter2;