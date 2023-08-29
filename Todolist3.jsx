import React from "react";
import Todo from "./Todo";

function Todolist3(props){
    //state
    var [todos,setTodos]=React.useState(['mango','apple','cat','banana','orange','guava'])
    //logic
    function addtodo(){
        var x = document.getElementById('gl').value
        setTodos([...todos,x])
       
    }
    var delTodo = React.useCallback(function(i){
        console.log("Todolist rendered")
        var temp = [...todos]
        temp.splice(i,1)
        setTodos([...temp])
        //alert(i)
    },[])
    //template
    return (
        <div className="mybox">
            <h1>Todolist</h1>
            <input type="text" id="gl"/>
            <button onClick={addtodo}>Add List</button>
            
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <Todo todo={todo} delTodo={()=>{delTodo(i)}}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist3;