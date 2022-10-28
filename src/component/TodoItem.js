import { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component{
    render(){
        const {id,text,checked,lineToggle,removeTodo} = this.props;
        return(
            <div className="todoItem">
                <span className="remove" onClick={()=>removeTodo(id)}>x</span>
                <div className={checked ? "checked" : ""} 
                onClick={()=>{lineToggle(id)}}>{text}</div>
            </div>
        )
    }
}
export default TodoItem;