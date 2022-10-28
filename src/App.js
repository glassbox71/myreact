import { Component } from "react";
import Form from "./component/Form";
import TodoListTemplate from "./component/TodoListTemplate";
import TodoItemList from "./component/TodoItemList";



//class App
class App extends Component {
  //1. 변수,배열,오브젝트 선언
  id = 3;
  state = {
    uinput: "",
    todos: [
      { id: 0, text: "리액트 정리하기", checked: false },
      { id: 1, text: "2차프로젵그 끝내기", checked: false },
      { id: 2, text: "pdf만들기", checked: false }
    ]
  }
  //2. 메서드
  //form input에 입력
  handleInput = (e) => {
    console.log("input");
    this.setState({
      uinput: e.target.value
    })
  }
  //데이터추가
  handleAdd = () => {
    console.log("add");
    //배열과 데이터 합치기
    this.setState({
      uinput:"",
      todos: this.state.todos.concat({
        id: this.id++,
        text: this.state.uinput,
        checked: false
      })
    })
  }
  //
  handleToggle = (id) => {
    console.log("toggle")
  }
  handleRemove = (id) =>{
    console.log("remove");
    this.setState({
      todos:this.state.todos.filter(todo => todo.id !== id)
    })
  }
  //3. 붙일내용
  render() {
    const { uinput, todos } = this.state;
    return (
      <div>
        <TodoListTemplate sendform={<Form uValue={uinput}
          addInput={this.handleInput}
          addTodo={this.handleAdd} />}>
          <TodoItemList todosend={todos} 
          onToggle={this.handleToggle}
          onRemove={this.handleRemove} />
        </TodoListTemplate>
      </div>
    )
  }
}

export default App;
