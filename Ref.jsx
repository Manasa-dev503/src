import React, { createRef } from "react";
import { useEffect } from "react";
import Address from "./Address";
import { ForwardedRef } from "react";
function Ref(){
    var firstnameRef = React.useRef();
    var lastnameRef = React.useRef();
    var addressRef = React.useRef();
    useEffect(()=>{
        firstnameRef.current.focus();
    },[])
    function checkEnter(e){
        console.log(e.key)
        if(e.key==="Enter"){
            lastnameRef.current.focus();
        }

    }
    function focusAddress(e){
        if(e.key==="Enter"){
            addressRef.current.focus();

        }

    }
    return(
        <div className="mybox">
            <input type="text"  ref={firstnameRef} onKeyUp={(ev)=>{checkEnter(ev)}}/><br />
            <input type="text" ref={lastnameRef} onKeyUp={(ev)=>{focusAddress(ev)}}/>
            <Address ref={addressRef}></Address>
        </div>
    )
}
export default Ref;