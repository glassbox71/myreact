import "./Form.css";
const Form = ({uValue,addInput,addTodo}) =>{
    return(
        <div className="form">
            <input type="text" 
            value={uValue} 
            onChange={addInput} />
            <button 
            onClick={addTodo}>ADD</button>
        </div>
    )
}

export default Form;