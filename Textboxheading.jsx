import React from "react";
function Texthead(){
    var [x,setx] = React.useState([])
    function pqr(){
        var z = document.getElementById('inp').value
        setx([...x,z])
        

    }
    return (
        <div>
        <input type="text" id="inp"/>
        <button onClick={pqr}>Click here to push value</button>
        <br />
        {
            
                x.map((a)=>{
                    return <b style={{fontSize:"large"}}>{a}</b>;
                })
            
        
        }
        </div>
        
    )
}
export default Texthead;