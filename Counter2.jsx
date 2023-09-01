import React, { useEffect } from "react";
import Todolist1 from "./Todolist1";
import Counter1 from "./Counter1";
function Counter2(){
    var [x,setx] = React.useState(0)
    React.useEffect(()=>{
        console.log("Hello")
        //alert("hello")

    },[]);
    React.useEffect(()=>{
        console.log("Hi")
       

    })

    
  
    return (
       
        <div className="box">
            {/*{alert('how are you')}*/}
            <h1>Welcome to React</h1>
            <h1>{x}</h1>
            <button onClick={()=>{return setx(x+1)}}>increment</button>
            <Counter1></Counter1>
           

   
        </div>
        
    )


}
export default Counter2;
