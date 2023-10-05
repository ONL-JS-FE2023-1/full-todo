import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map(td => <TodoItem item={td} key={td._id} />)}
        </ul>
    );
}

export default TodoList;
