import React from "react";
import axios from 'axios';
function Shopping(){
    var [shopping,setshopping] = React.useState([""])
    React.useEffect(()=>{
        axios.get("https://course-api.com/react-useReducer-cart-project")
        .then((res)=>{
            console.log(res.data)
        })

    },[])
    return (
       <div className="mybox">
        <center>
        <h1>YOUR BAG</h1>
        
        </center>
       </div>
    )
}
export default Shopping;
