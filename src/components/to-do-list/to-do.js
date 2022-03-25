import React, {useState} from 'react';
import "./to-do.scss";
import TodoHeader from './TodoHeader';
import TodoForm from "./TodoForm";

const ToDo = () =>{

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
        
    return(<div className='container'>
        <div className='app-wrapper'>
            <div>
                <TodoHeader />
            </div>
            <div>
                <TodoForm 
                input = {input}
                setInput = {setInput}
                todos = {todos}
                setTodos = {setTodos}
                />
            </div>
        </div>
    </div>);
}

export default ToDo;