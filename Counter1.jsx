import React from "react";
import Childcomp from "./Childcomp";
function Counter1(){
    var [count,setcount] = React.useState(0)
    function abc(){
        setcount(count+1)
    }
    React.useEffect(()=>{
        //alert('hi')

    },[])
    var ar = React.useMemo(()=>{return ([12,34])},[])
    return (
        <div className="mybox">
            <h1>Welcome to ReactJs</h1>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{abc()}}>Increment</button>
            <Childcomp x={ar}></Childcomp>
        </div>
    )
}
export default Counter1;