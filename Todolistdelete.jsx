import React from "react";
function Tododelete(){
    var [list,setlist] = React.useState([])
    function pqr(){
        var x = document.getElementById('d5').value
        setlist([...list,x])
    }
   
    
    return (
        <div>
            <input type="text" id="d5"/>
            <button onClick={pqr}>Click here to push value</button>
            {
                    list.map((a)=>{
                        return <li>{a}</li>;
                        <button onClick={abc}></button>
                    })
                }
            
        </div>
    )
}
export default Tododelete;