import React from "react";

function Todolist2(){
    var[todos,setTodos] = React.useState(
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
        function done(i){
            var temp = [...todos]
            if(temp[i].update==="completed"){
                temp[i].update="not completed"
            }else{
                temp[i].update="completed"
            }
            setTodos([...temp])

        }

        return (
            todos.map((todo,i)=>{
                return <li style={(todo.update==="completed")?{backgroundColor:"green"}:{backgroundColor:"red"}}>
                    {todo.title}
                    <button onClick={()=>{done(i)}} >Done</button>
                </li>
            })
        )

    
}
export default Todolist2;