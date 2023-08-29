import React from "react";

function Todolist1(){
    console.log("First Todolist")
    //state
    var [todos,setTodos]=React.useState(['mango','apple','cat','banana','orange'])
    //logic
    function addtodo(){
        console.log("add todo list")
        var p = document.getElementById('k').value
        setTodos([...todos,p])
       
    }
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" id="k"/>
            <button onClick={()=>{addtodo()}}>Add List</button>
            
            <ul>
                {
                    todos.map((a)=>{
                        return <li>{a}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default React.memo(Todolist1);