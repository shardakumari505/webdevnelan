import React, {useState, useEffect} from 'react';
import "./to-do.scss";
import TodoHeader from './TodoHeader';
import TodoForm from "./TodoForm";
import TodosList from './TodosList';

const ToDo = () =>{

    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
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
                editTodo={editTodo}
                setEditTodo={setEditTodo}
                />
            </div>
            <div>
                <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
            </div>
        </div>
    </div>);
}

export default ToDo;