import React from "react";
function Prp(props){
    return (
        <div>
            <li className="box"  style={(props.data.update==="completed")?{backgroundColor:"green"}:{backgroundColor:"red"}} >
                {props.data.title}
                <button onClick={()=>{props.dn()}}>Done</button>
                <button>Undo</button>
            </li>
        </div>
    )
}
export default Prp;