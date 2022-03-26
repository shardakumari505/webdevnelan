import React from 'react';
import './todo.styles.scss';

const TodoComponent = () =>{
    return(<div className='todo-component-home-page'>
        <div className='todo-component-left'>
            <h2 className='todo-left-text'>Personal Task List</h2>
            <p>Task Lists can go a long way towards improving both collaboration and productivity, it will constantly remind users of their pending task.</p>
        </div>
        <div className='todo-component-right'>
            <div className="todo-component-lottie-animation"><lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_z4cshyhf.json"
            background="transparent"
            speed="2"
            loop
            autoplay
          ></lottie-player></div>
        </div>
    </div>);
};

export default TodoComponent;