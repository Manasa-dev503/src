import React from "react";
function Objprp(props){
        var name =  props.name
        var list = props.list
    return (
        <div>
            <h1>{name}</h1>
            {
                list.map((a)=>{
                    return <li>{a}</li>
                })
            }
        
        </div>
        


    )
}
export default Objprp;