import React from "react";
function Textlist(){
    var [list,setlist] = React.useState([])
    function pqr(){
        var x = document.getElementById('d1').value
        setlist([...list,x])
    }
    return (
        <div>
            <input type="text" id="d1"/>
            <button onClick={pqr}>Click here to push value</button>
            {
                    list.map((a)=>{
                        return <li>{a}</li>;
                    })
                }
            
        </div>
    )
}
export default Textlist;