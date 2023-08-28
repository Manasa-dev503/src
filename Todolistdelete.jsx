import React from "react";
function Tododelete(){
    var [list,setlist] = React.useState([])
    function pqr(){
        var x = document.getElementById('d5').value
        setlist([...list,x])
    }
   
    function abc(i){
        var temp = list
        temp.splice(i,1)
        setlist([...temp])
    }
    
    return (
        <div>
            <input type="text" id="d5"/>
            <button onClick={pqr}>Click here to push value</button>
            {
                    list.map((a,i)=>{
                        return <li>
                            {a}
                            <button onClick={()=>{abc(i)}}>Delete</button>
                            </li>;
                        
                    })
                }
            
        </div>
    )
}
export default Tododelete;