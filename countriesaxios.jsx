import React from "react";
import axios from "axios";
function Countries(){
    var [country,setCountry]= React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then(function(res){
        
             setCountry(res.data)
            })
        },[])
        var data=[...country]
        function asc(){
            var n=data.sort((a,b)=>{
                if(a.name.common<b.name.common){
                    return -1;
                }
                if(a.name.common>b.name.common){
                    return 1;
                }
                return 0;
            })
            setCountry(n)
        }
        function dec(){
            var m = data.sort((a,b)=>{
                if(a.name.common<b.name.common){
                    return 1;
                }
                if(a.name.common>b.name.common){
                    return -1;
                }
                return 0;
            })
            setCountry(m)
        }
        function abc(){
            var g=document.getElementById('search')
            var p = country.filter(function(a){
                return (a.name.common.toLowerCase().startsWith(g.value))
            })
            setCountry(p)
            
        }


return (
<div>
    <button onClick={asc}>Ascending</button>
    <button onClick={dec}>Descending</button>
    <input type="text" id="search" onKeyUp={()=>{abc()}}/>
    
    {
        country.map((a)=>{
            return <li>{a.name.common}</li>
        })
    }
    </div>
    
)

}
export default Countries;