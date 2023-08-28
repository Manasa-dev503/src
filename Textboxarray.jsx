import React from "react";
function Textbox(){
    var [x,setx] = React.useState([])
    function abc(){
        var y = document.getElementById('dd').value
       setx([...x,y])
    }

    return (
        <div>
            
                <input type="text" id="dd"/>
                <button onClick={abc}>Click here to push value</button>
                {
                    x.map((a)=>{
                        console.log(a)
                    })
                }
            
        </div>
    )
}
export default Textbox;