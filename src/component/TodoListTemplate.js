import "./TodoListTemplate.css";
const TodoListTemplate = ({sendform,children}) =>{
    return(
        <div className="todoWrap">
            <h1 className="title">오늘의 할일</h1>
            <section className="formWrap">{sendform}</section>
            <section>{children}</section>
        </div>
    )
}
export default TodoListTemplate;