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
        <center>
            <h1>Our Tours</h1>
            </center>
            {
        x.map((a,i)=>{
            return <div>
            <center>
            <div class="card" style={{width:"40%",height:"auto",marginBottom:"30px"}}>
             <img src={a.image} style={{width:"100%",padding:"5px",height:"100%"}} alt="" />
             <div class="card-body" style={{width:"auto",padding:"5px"}}>
                 <span><p class="text-start" style={{fontSize:"20px"}}><b>{a.name}</b></p><p class="text-end"><span class="badge bg-secondary">{"$"+ a.price}</span></p></span>
                 <p>{a.flag?a.info:a.info.slice(0,200)}</p>
                 <button onClick={()=>{abc(i)}}>Read More</button>
                 <button onClick={()=>{del(i)}} style={{borderColor:"red",color:"red"}}>Not intrested</button>
             </div>
             </div>
            </center>    
            </div>
        })
    }
    )
}
export default Shopping;
