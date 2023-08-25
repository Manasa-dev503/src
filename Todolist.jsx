import React from "react";
function Todolist(){
    //state
    var [todos,setTodos]=React.useState(['mango','apple','cat','banana','orange'])
    //logic
    function addtodo(){
        var x = document.getElementById('in').value
        setTodos([...todos,x])
       
    }
    //template
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" id="in"/>
            <button onClick={addtodo}>Add List</button>
            
            <ul>
                {
                    todos.map((todo)=>{
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;