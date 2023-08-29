import React from "react"


function Todo(props){
    console.log("Todo rendered")
    return (
        <div>
            <li className="mybox">
                {props.todo}
                <button onClick={()=>{props.delTodo()}}>Delete</button>
                <button>Done</button>
                <button>Undo</button>
            </li>
        </div>

    )
}
export default Todo;