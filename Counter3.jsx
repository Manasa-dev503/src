import React from "react";
function Counter3(){
    var [x,setx] = React.useState([1])
    return (
        <div className="mybox">
            <h1>Welcome to ReactJS Training</h1>
            <h1>Counter:{x}</h1>
            {setx([999])}

        </div>
    )
}
export default Counter3;