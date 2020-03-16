import React, {useState} from 'react';

export default function TodoForm(props) {

const [newTodo, setNewTodo] = useState('');

const changeHandler = e => {
    setNewTodo(e.target.value);
    console.log(newTodo);
}

const submitHandler = e => {
    e.preventDefault();
    // alert(`submitted ${newTodo}`)
    props.addTask(newTodo)
    setNewTodo('')
}

return (
    <div>
        <p>this is the todo form</p>
        <form onSubmit = {submitHandler}>
            <input onChange = {changeHandler}/>
            <button type = 'submit'>Submit</button>
            <button type = 'button' onClick = {props.removeCompleted}>Remove Completed</button>
        </form>
    </div>
);

}