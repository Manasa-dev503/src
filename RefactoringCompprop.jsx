import React from "react";
import Prp from "./Componentprp"
function Comprp(props){
    var [datas,setdata] = React.useState(
        [
            {
                title:'clear bill',
                update : 'completed'
            },
            {
                title:'Moksha School',
                update : 'not completed'
            },
            {
                title:'Manas Bus fee',
                update:'completed'
            },
            {
                title:'Gold Bill',
                update:'not completed'
            },
            {
                title:'Current Bill',
                update:'not completed'
            }
        ])
    

    function Addlistdata(props){
        var x = document.getElementById('in').value
        setdata([...datas,x])
    }

    function dn(i){
        var temp = [...datas]
        if(temp[i].update==="completed"){
            temp[i].update="not completed"
        }else{
            temp[i].update="completed"
        }
        setdata([...temp])

        
    }
    


    return (
        <div>
        <input type="text" id="in" />
        <button onClick={Addlistdata}>Add Task</button><br /><br /><br />
        {
        datas.map((data,i)=>{
            return <Prp data={data} dn={()=>{dn(i)}}></Prp>
        })
        }
        </div>

    )
}
export default Comprp;
