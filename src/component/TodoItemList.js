import { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component{    
    render(){
        const {todosend,onToggle,onRemove}=this.props;
        const todoList = todosend.map(({id,text,checked}) =>(
            <TodoItem id={id} text={text} checked={checked} 
            lineToggle={onToggle}
            removeTodo={onRemove}/>
        ))
        return(
            <div>
               {todoList}
            </div>
        )
    }
}
export default TodoItemList;